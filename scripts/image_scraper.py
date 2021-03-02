import requests
import json
from bs4 import BeautifulSoup
from PIL import Image

card_types = ['Economy', 'Military', 'Building', 'Skill']
array = []

for type in card_types:
    url = 'https://ratropolis.fandom.com/wiki/Category:'+type+'_Cards'
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    results = soup.findAll("a", {"class":"category-page__member-link"})
    for a in results:
        sub_url = 'https://ratropolis.fandom.com'+a['href']
        sub_page = requests.get(sub_url)
        sub_soup = BeautifulSoup(sub_page.content, 'html.parser')
        image_tag = sub_soup.find("img", {"class": "pi-image-thumbnail"})
        card_information = sub_soup.findAll("div",{"class":"pi-data-value pi-font"})
        card_name = sub_soup.find("h2", {"class":"pi-item pi-item-spacing pi-title"}).getText()

        card_type = card_information[0].getText()
        card_rarity = card_information[1].getText()
        card_cost = card_information[2].getText()
        card_effect = card_information[3].getText()

        image_url = image_tag['src']
        image = Image.open(requests.get(image_url, stream = True).raw)
        image.save('resources/'+card_name.lower()+'.png')

        data = {
            "name": card_name,
            "type": card_type,
            "rarity": card_rarity,
            "cost": card_cost,
            "effect": card_effect
        }
        array.append(data)

with open('card_data.txt', 'w') as outfile:
    json.dump(array, outfile)