import requests
import json
from bs4 import BeautifulSoup

array = []
advisor_types = ["Universal","Merchant","General","Builder","Scientist","Shaman","Navigator"]
advisor_url = "https://ratropolis.fandom.com/wiki/Category:Advisors";
page = requests.get(advisor_url)
soup = BeautifulSoup(page.content, 'html.parser')
tables = soup.findAll("table", {"class":"article-table"})

for idx in range(len(advisor_types)):
    result = soup.find("span", {"id": advisor_types[idx]+"_Advisors"})
    if result != None:
        table_body = tables[idx].find("tbody")
        skip_header_counter = 0
        for row in table_body.findAll("tr"):
            if skip_header_counter == 0:
                skip_header_counter = 1
            else:
                advisor_info = row.findAll("td")
                advisor_name = advisor_info[0].getText().rstrip("\n")
                advisor_type = advisor_info[1].getText().rstrip("\n")
                advisor_effect = advisor_info[2].getText().rstrip("\n")
                if idx == 0:
                    advisor_type = advisor_info[2].getText().rstrip("\n")
                    advisor_effect = advisor_info[3].getText().rstrip("\n")
                
                # print(advisor_name, advisor_type, advisor_effect)
                data = {
                    "name": advisor_name,
                    "type": advisor_type,
                    "effect": advisor_effect
                }
                array.append(data)

with open('advisor_data.txt', 'w') as outfile:
    json.dump(array, outfile)
