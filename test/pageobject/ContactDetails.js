class ContactDeatils {
    get ctctDtlLink() {
        return $('//a[text()="Contact Details"]')
    }
    get entrStreet1() {
        return $('//label[text()="Street 1"]/following::div[1]/input')
    }
    get entrStreet2() {
        return $('//label[text()="Street 2"]/following::div[1]/input')
    }
    get entrCity() {
        return $('//label[text()="City"]/following::div[1]/input')
    }
    get entrState() {
        return $('//label[text()="State/Province"]/following::div[1]/input')
    }
    get entrPostlCode() {
        return $('//label[text()="Zip/Postal Code"]/following::div[1]/input')
    }
    get selectCountry() {
        return $('//label[text()="Country"]/following::div[1]/div')
    }
    get entrHome() {
        return $('//label[text()="Home"]/following::div[1]/input')
    }
    get entrMobile() {
        return $('//label[text()="Mobile"]/following::div[1]/input')
    }
    get entrWork() {
        return $('//label[text()="Work"]/following::div[1]/input')
    }
    get entrEmail() {
        return $('//label[text()="Work Email"]/following::div[1]/input')
    }
    get entrOtherEmail() {
        return $('//label[text()="Other Email"]/following::div[1]/input')
    }
    get saveBtn() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button')
    }

    async enterContactDetaila() {
        await this.ctctDtlLink.click()
        await this.entrStreet1.waitForDisplayed({ timeout: 5000, interval: 1000 })
        await this.entrStreet1.setValue("los stret angelina")
        await this.entrStreet2.setValue("near location church")
        await this.entrCity.setValue("delhi")
        await this.entrState.setValue("Delhi")
        await this.entrPostlCode.setValue("123456")
        await this.selectCountry.click()


        await this.entrHome.setValue("241746")
        await this.entrMobile.setValue("9012634511")
        await this.entrWork.setValue("7215171861")

        await this.entrEmail.setValue("mfsi@gmail.com") 
        await this.entrOtherEmail.setValue("sgqg@yahoo.com")
        await browser.pause(5000)
        await this.saveBtn.click();
    }

}
module.exports = new ContactDeatils()