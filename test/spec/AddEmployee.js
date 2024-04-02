const LoginPage = require('../pageobject/Login')
const AddEmp = require('../pageobject/Pim')
const PersonalDetails = require('../pageobject/PersonalDetails')
const ContactDeatils = require('../pageobject/ContactDetails')

describe("sample login",()=>{
    it("loging to hrm",async()=>{
        browser.maximizeWindow()
        browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await LoginPage.loggingIn()
    })
    it("verify dashboard",async()=>{
        await AddEmp.verifyDashboard()
    })
    it('adding employee',async()=>{
        await AddEmp.goToAddEmploy()
        browser.pause(4000)
        await AddEmp.addEmpDetails("Mukul","Joshi")
    })
    it('adding personal details',async()=>{
        await PersonalDetails.enterPersonalDetails()
    })
    it('adding contact details',async()=>{
        await ContactDeatils.enterContactDetaila()
    })
})