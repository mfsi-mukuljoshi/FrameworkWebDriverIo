class Pim {

    get pimLink() {
        return $('//*[text()="PIM"]')
    }

    get addEmployLink() {
        return $('//a[text()="Add Employee"]')
    }

    async verifyDashboard() {
        browser.pause(3000)
        await $('//h6[text()="Dashboard"]').isDisplayed()
    }



    async goToAddEmploy() {
        await this.pimLink.click()
        await this.addEmployLink.click()
    }

    get randomNumber() {
        let randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
        return randomFourDigitNumber
    }

    get entrFrstName() {
        return $('//input[@name="firstName"]')
    }
    get entrLastName() {
        return $('//input[@name="lastName"]')
    }
    get entrEmpId() {
        return $('//label[text()="Employee Id"]/following::div/input')
    }
    get saveBtn() {
        return $('//button[text()=" Save "]')
    }
    get perdetailsLink()
    {
        return $('//a[text()="Personal Details"]')
    }

    async addEmpDetails(frstName, lastName) {
        await this.entrFrstName.waitForDisplayed({ timeout: 5000, interval: 1000 })
        await this.entrFrstName.setValue(frstName)
        await this.entrLastName.waitForDisplayed({ timeout: 5000, interval: 1000 })
        await this.entrLastName.setValue(lastName)
        await this.entrEmpId.waitForDisplayed({ timeout: 5000, interval: 1000 })
        await this.entrEmpId.clearValue()
        await this.entrEmpId.setValue(this.randomNumber)
        await this.saveBtn.click()
        await this.perdetailsLink.waitForDisplayed({ timeout: 10000, interval: 1000 })
    }
}

module.exports = new Pim()