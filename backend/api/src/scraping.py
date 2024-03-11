import time
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By
import os

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)

load_dotenv() 

url_store1 = os.getenv("STORE1_URL")
url_store2 = os.getenv("STORE2_URL")
url_store3 = os.getenv("STORE3_URL")


products1 = {}
products2 = {}
products3 = {}

driver = webdriver.Chrome(options=chrome_options)


#  -------------------------------------store1---------------------------------------

def store1_scraping():
    driver.get(url_store1)
    input = driver.find_elements(By.XPATH, "/html/body/div[1]/header/div/div[1]/div[2]/div/form/div[3]/div[1]/input")

    time.sleep(5)
    for i in input:
        i.send_keys("Cube")

    search_button = driver.find_elements(By.XPATH, "/html/body/div[1]/header/div/div[1]/div[2]/div/form/div[4]/div/span")

    time.sleep(5)
    for i in search_button:
        i.click()
        break

    for i in range(3):
        time.sleep(5)
        price1 = driver.find_elements(By.CSS_SELECTOR, ".a-price-whole")
        price2 = driver.find_elements(By.CSS_SELECTOR, ".a-price-fraction")
        # rate = driver.find_elements(By.CSS_SELECTOR, ".a-section .a-spacing-none .a-spacing-top-micro")
        name = driver.find_elements(By.CSS_SELECTOR, ".a-text-normal .a-color-base")
        
        # time.sleep(5)
        print(price1[i+4].text)
        print('\n')
        print(price2[i+4].text)
        print('\n')
        # print(rate[i+4].text)
        # print('\n')
        print(name[i+4].text)
        print('--------')




#  -------------------------------------store2---------------------------------------

def store2_scraping():
    driver.get(url_store2)
    # input = driver.find_elements(By.XPATH, "/html/body/div[1]/header/div/div[1]/div[2]/div/form/div[3]/div[1]/input")

    # time.sleep(5)
    # for i in input:
    #     i.send_keys("Cube")

    # search_button = driver.find_elements(By.XPATH, "/html/body/div[1]/header/div/div[1]/div[2]/div/form/div[4]/div/span")

    # time.sleep(5)
    # for i in search_button:
    #     i.click()
    #     break

    # for i in range(3):
    #     time.sleep(5)
    #     price1 = driver.find_elements(By.CSS_SELECTOR, ".a-price-whole")
    #     price2 = driver.find_elements(By.CSS_SELECTOR, ".a-price-fraction")
    #     # rate = driver.find_elements(By.CSS_SELECTOR, ".a-section .a-spacing-none .a-spacing-top-micro")
    #     name = driver.find_elements(By.CSS_SELECTOR, ".a-text-normal .a-color-base")
        
    #     # time.sleep(5)
    #     print(price1[i+4].text)
    #     print('\n')
    #     print(price2[i+4].text)
    #     print('\n')
    #     # print(rate[i+4].text)
    #     # print('\n')
    #     print(name[i+4].text)
    #     print('--------')










#  -------------------------------------store3---------------------------------------

def store3_scraping():
    driver.get(url_store3)

    a = driver.find_elements(By.XPATH, "/html/body/header/div/div[2]/form/button")

    for i in a:
        i.click()
