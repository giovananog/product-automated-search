import time
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By
import os

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)
chrome_options.add_argument("--headless")

load_dotenv() 

url_store1 = os.getenv("STORE1_URL")
url_store2 = os.getenv("STORE2_URL")
url_store3 = os.getenv("STORE3_URL")


driver = webdriver.Chrome(options=chrome_options)


#  -------------------------------------store1---------------------------------------

def store1_scraping(info_list, product_name):
    driver.get(url_store1)

    time.sleep(3)
    
    close_button = driver.find_element(By.CSS_SELECTOR, ".pop-close-btn")

    if close_button:
        close_button.click()

    input = driver.find_elements(By.CSS_SELECTOR, ".search--keyword--15P08Ji")

    for i in input:
        i.send_keys(product_name)

    search_button = driver.find_elements(By.CSS_SELECTOR, ".search--submit--2VTbd-T")

    for i in search_button:
        i.click()
        break

    for i in range(3):
        name = driver.find_element(By.XPATH, f'/html/body/div[6]/div[1]/div/div[2]/div[2]/div[2]/div[{i+1}]/div/a/div[2]/div[1]/h3')
        sale = driver.find_element(By.XPATH, f'/html/body/div[6]/div[1]/div/div[2]/div[2]/div[2]/div[{i+1}]/div/a/div[2]/div[2]/span')

        sales = sale.text.split('+')[0]

        price1 = driver.find_element(By.XPATH, f'/html/body/div[6]/div[1]/div/div[2]/div[2]/div[2]/div[{i+1}]/div/a/div[2]/div[3]/div[1]/span[2]')
        price2 = driver.find_element(By.XPATH, f'/html/body/div[6]/div[1]/div/div[2]/div[2]/div[2]/div[{i+1}]/div/a/div[2]/div[3]/div[1]/span[4]')
        
        price = f'{price1.text},{price2.text}'

        image_div = driver.find_elements(By.CSS_SELECTOR, '.images--imageWindow--1Z-J9gn')

        image = image_div[i+1].find_element(By.CSS_SELECTOR, "img").get_attribute('src')

        dict = {
            'name': name.text,
            'price': price,
            'sales': sales,
            'image': image,
            'store': 1
        }

        info_list.append(dict)
    
    return info_list


#  -------------------------------------store2---------------------------------------

def store2_scraping(info_list, product_name):
    driver.get(url_store2)

    time.sleep(5)
    input = driver.find_elements(By.CSS_SELECTOR, "#input-search")

    time.sleep(5)
    for i in input:
        i.send_keys(product_name)
        break

    search_button = driver.find_elements(By.CSS_SELECTOR, ".sc-eqUAAy.IubVJ.sc-cVzyXs.cEKPCm")

    time.sleep(5)
    for i in search_button:
        i.click()

    for i in range(3):
        time.sleep(5)
        names = driver.find_elements(By.CSS_SELECTOR, ".sc-fvwjDU.fbccdO")
        prices = driver.find_elements(By.CSS_SELECTOR, ".sc-kpDqfm.eCPtRw.sc-bOhtcR.dOwMgM")
        sales = driver.find_elements(By.CSS_SELECTOR, ".sc-epqpcT.jdMYPv")
        image_div = driver.find_elements(By.CSS_SELECTOR, ".sc-gZfzYS.kWXvSd img")
        image = image_div[i+4].get_attribute('src')


        dict = {
        'name': names[i+4].text,
        'price': prices[i+4].text.split(' ')[1],
        'sales': sales[i+4].text,
        'image': image,
        'store': 2
        }

        info_list.append(dict)

    return info_list

#  -------------------------------------store3---------------------------------------

def store3_scraping(info_list, product_name):
    driver.get(url_store3)
    input = driver.find_elements(By.CSS_SELECTOR, ".nav-search-input")

    time.sleep(5)
    for i in input:
        i.send_keys(product_name)

    search_button = driver.find_elements(By.CSS_SELECTOR, ".nav-search-btn")

    time.sleep(5)
    for i in search_button:
        i.click()
        break

    for i in range(3):
        time.sleep(5)
        sales = driver.find_elements(By.CSS_SELECTOR, ".ui-search-reviews__amount")
        name = driver.find_elements(By.CSS_SELECTOR, ".ui-search-item__title")
        price = driver.find_elements(By.CSS_SELECTOR, ".andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript")

        price_text = price[i+2].get_attribute('aria-label').split(' ')

        price = f'{price_text[0]}.{price_text[3]}' if len(price_text) > 2 else price_text[0]

        time.sleep(5)
        image_div = driver.find_elements(By.CSS_SELECTOR, ".andes-carousel-snapped__slide.andes-carousel-snapped__slide--active img")
        image = image_div[i+2].get_attribute('src')

        dict = {
        'name': name[i+2].text,
        'price': price,
        'sales': sales[i+2].text.split('(')[1].split(')')[0],
        'image': image,
        'store': 3
        }

        info_list.append(dict)

    return info_list
