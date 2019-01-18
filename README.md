# Felloship BDD: PHP vs JS 

## Server usable
| VENTURE  | STAGE    | URL                                             | TEAM      |
|----------|----------|-------------------------------------------------|-----------|
|latamz_co | staging  | sellercenter-staging-linio-co.sellercenter.net  | Core 1    |
|latamz_ve | staging  | sellercenter-staging-linio-ve.sellercenter.net  | Core 2    |
|nafamz_eg | staging  | sellercenter-staging-jumia-eg.sellercenter.net  | Core 1    |
|nafamz_ng | staging  | sellercenter-staging-jumia-ng.sellercenter.net  | Core 2    |
|seaamz_id | staging  | sellercenter-staging-lazada-id.sellercenter.net | GFG       |
|seaamz_my | staging  | sellercenter-staging-lazada-my.sellercenter.net | IMT       |
|seaamz_th | staging  | sellercenter-staging-lazada-th.sellercenter.net | IMT       |
|latamz_co | live     | linio-co.sellercenter.net                       | Core 1    |
|latamz_ve | live     | linio-ve.sellercenter.net                       | Core 2    |
|nafamz_eg | live     | jumia-eg.sellercenter.net                       | IMT       |
|nafamz_ng | live     | jumia-ng.sellercenter.net                       | GFG       |
|seaamz_id | live     | lazada-id.sellercenter.net                      | GFG       |
|seaamz_my | live     | lazada-my.sellercenter.net                      | IMT       |
|seaamz_th | live     | master.sellercenter.net                         | CD System |

## How to install
### Install Selenium and Chrome
https://rbrt.wllr.info/2017/11/22/how-setup-testing-behat-selenium-chrome.html

### To run Selenium                                                              
java -jar /usr/local/share/selenium/selenium-server-standalone-3.7.1.jar

### To run Chrome
java -jar -Dwebdriver.chrome.driver="/usr/local/share/chromedriver" /usr/local/share/selenium/selenium-server-standalone-3.7.1.jar -debug



# Turn on Selenium and suppress the output
java -jar -Dwebdriver.chrome.driver="/usr/local/share/chromedriver" /usr/local/share/selenium/selenium-server-standalone-3.7.1.jar >/dev/null 2>&1 &

# Run Behat
bin/behat --verbose
