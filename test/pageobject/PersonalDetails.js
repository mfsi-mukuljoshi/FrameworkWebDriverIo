class PersonalDetails{
    get entrDlNo()
    {   //label[text()="License Expiry Date"]/preceding::label[1]/following::div/input
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input')
    }

    get entrDlExpiry()
    {
        return $('//label[text()="License Expiry Date"]/following::div/input')
    }
    get selectNationality()
    {
        return $('//label[text()="Nationality"]/following::div/div')
    }

    get enterDOB()
    {
        return $('//label[text()="Date of Birth"]/following::div/input')
    }

    get martitalStaus()
    {
        return $('//label[text()="Marital Status"]/following::div/div')
    }
    get ctctDtlLink()
    {
        return $('//a[text()="Contact Details"]')
    }

    async radioButton(gender)
    {
        if(gender==="Male")
        {
            return await $('//label[text()="Male"]')
        }
        else
        {
            return await $('//label[text()="Female"]')
        }
       
    }

    get saveDetails()
    {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button')
    }
    async selectMaritalStatus(status)
    {
        return await $('//div[@class="oxd-select-option"]/span[text()="'+status+'"]')
    }
    async selectCountryNat(country)
    {
        return await $('//div[@class="oxd-select-option"]/span[text()="'+country+'"]')
    }

    async enterPersonalDetails()
    {
        await this.entrDlNo.waitForEnabled({ timeout: 5000, interval: 1000 })
        await this.entrDlNo.setValue("12345677")
        await this.entrDlExpiry.setValue('2015-12-11')
        await this.selectNationality.click()
        const con = await this.selectCountryNat("Canadian")
        await con.click()
       await this.martitalStaus.click()
       const mart = await this.selectMaritalStatus("Single")
       await mart.click()
        const gen =   await this.radioButton("Male")
        await gen.click();
       
        await this.enterDOB.setValue("2003-11-12")
        await browser.pause(5000)
        await this.saveDetails.click()

    }
}
module.exports = new PersonalDetails()