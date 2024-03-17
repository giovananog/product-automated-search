from scraping import store1_scraping, store2_scraping, store3_scraping


# get list with all products
def getProductsSearch (productName):

    list = []

    list = store1_scraping(list, productName)
    list = store2_scraping(list, productName)
    list = store3_scraping(list, productName)

    return list
