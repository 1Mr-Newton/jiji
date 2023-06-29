import requests

url = "https://jiji.com.gh/api_web/v1/start_spa_data"
# url = "https://jiji.com.gh/api_web/v1/trending-items.json"

data = requests.get(url).json()["data"]
categories = data["categories"]
cats = []
d = ""
# homeIcon: require("../assets/home.png"),
for cat in categories:
    icon = str(cat["name"]).lower().replace(" ", "").replace(",", "")
    d += f"""{icon}Icon: require("../assets/{icon}.png"),\n"""
    # cats.append(
    #     {
    #         "name": cat["name"],
    #         "key": cat["id"],
    #         "icon": str(cat["name"]).lower().replace(" ", ""),
    #     }
    # )
print(d)
