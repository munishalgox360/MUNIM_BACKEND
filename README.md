# MUNIM APP
Munim The Accoutant

<img src="https://play-lh.googleusercontent.com/uuzhLk9vS0HhUWqwtycV8cOWJKIVjgaui9I4SGhTTwXMKkD1tygQc4bOWLpDSlkSpoo=w240-h480-rw" height="100px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

>Try online billing and Accounting software for small businesses

# Developed By :- Algox360 IT Solutions LLP
<img src="https://algox360.com/img/logo.webp" height="40px">



[APP](//www.plantuml.com/plantuml/png/xLPDRzGm4Btlhp3BWHRKYdBi0JNqGwf4swNR2yUfFPiTrR63FGbT8VZjE8chQfrOQ47Y0djPPTwycVZDHtpY6HmtbPwzu3LMADOW7z3DPbA3z-9K4neMtsOY_5w9Cs0G5uHQUR4dRLK7RjKv7Ett7Y-5x0cNP-9OBDcHAQFTG8MfhRBtf4TMh81qQdHsxDZdDvjhg7BGtQREGOLI3htFe8krDJdc-TJxHUoZbS1aJGQ-nP8ykzubIDbbwFwYK-dvkgdkqQNiGCq0pgv8uu8aDmx7AAxGELGBs7H5ka9UMvLwWUQhM8SHC7bK0BK6D_r2v0l9r7QnFbYh4KmF71o8cyNvRN5tUNEz34-ncsvg7BH8ckdTq4m_XElrGhUt7mAsbbHlVoEqBScaHeyQ9I_HjIGn1Ijum2X32ZMrjg3Eh6mwrAUm12DHZyD6hWB6nL26P_3xq_X4Md1eIQ7ROOxgIFa_IV_c9FcXSmg7CAAr8HQ4HCIR57F0uI5OBxG5pavb1F2nHaTe96RIB-sAly9O46jEjMtKTi28VMb0qugconT1L9yHt7RHo7WcRdWidrBKnGBzQJhqNzmnL9gYT8XJYoIER9nvl-EUoQyICCRoSEH2LMHss2BG-UTNI7ul_8wSST4QA77XI8OmwHd1Tm8ETueKioqwZrZKzKWPZ-wg2vke7gJ1HubrhyoJhZk8eo8bqMVg4fCmfhQXP-36_xc2iK-cssFP9zcI8DxGvaVpaEEzcByzF7mzVvRZECRpi_HRz6l6q6s9Nynt72kTyKgJFRkVe55DfNy2)

@startuml
!theme hacker

class Client {
    ' Data Fields (compartment 1)
    # clientID : String
    # name : String
    # mobile : String
    # email : String
    # role : String
    # companyName : String
    # companyType : String
    # companyAddress : String
    # companyPhone : String
    # companyEmail : String
    # companyLocation : String
    # companyRegistrationDate : Date
    # gstNumber : String
    # panNumber : String
    # profilePicture : String
    # preferredPaymentMethod : String
    # altMobile : String
    # altEmail : String
    # aadharNumber : String
    # isActive : Boolean
    -- OPERATIONS --
    ' Operations (compartment 2)
    ~ register() : void
    + login() : void
    + selectService() : void
    + makePayment() : void
    + uploadDocuments() : void
    + cancelService() : void
    + updateProfile() : void
}

class ServiceProvider {
    ' Data Fields (compartment 1)
    # providerID : String
    # name : String
    # mobile : String
    # email : String
    # role : String
    # companyName : String
    # companyType : String
    # companyAddress : String
    # companyPhone : String
    # companyEmail : String
    # companyLocation : String
    # companyRegistrationDate : Date
    # gstNumber : String
    # panNumber : String
    # profilePicture : String
    # preferredPaymentMethod : String
    # altMobile : String
    # altEmail : String
    # aadharNumber : String
    # serviceArea : String
    # availability : String
    # rating : Float
    # isActive : Boolean
    # experience : String
    # serviceSoftware : String
    # onCloud : Boolean
   
    # qualification : String
    # qualifiedYear : Date
    # institute : String
    # additionalQualification : String

    -- OPERATIONS --
    ' Operations (compartment 2)
    ~ register() : void
    + login() : void
    + signAgreement() : void
    + provideServices() : void
    + uploadDocuments() : void
    + updateProfile() : void
}

annotation Admin {
    ' Data Fields (compartment 1)
    # adminID : String
    # name : String
    # role : String
 -- OPERATIONS --
    ' Operations (compartment 2)
    + managePricing() : void
    + assignClient() : void
    + overseeApp() : void
    + userManagement() : void
}

exception Document {
    ' Data Fields (compartment 1)
    # documentID : String
    # clientID : String
    # documentType : String
    # status : String
 -- OPERATIONS --
    ' Operations (compartment 2)
    + upload() : void
    + updateStatus() : void
}

Client "1" --> "0..*" Document : uploads
ServiceProvider "1" --> "0..*" Document : uploads
Admin "1" --> "0..*" Client : manages
Admin "1" --> "0..*" ServiceProvider : manages
@enduml



[WORK FLOW](//www.plantuml.com/plantuml/dpng/ZP91Ry8m38Nl-HK-JN2OkEymKO4qSM2gLaqxJYQrYaL8cEE2-FThe5rHHxNTKkTzhy-nvr5HjDuxWrQ3mC8nUMq_2f8ZMyeb7BaaQQjPkMTlp5K9Zy-m3Xjsb1qEy0HlL75Kaf7hWXnPxOpX0N8yxvCkT-XxfYk_eD89pmsunXrrrVzvTwb7rRw4PR1rSemmMNB5YiwTOGQBK0kJJCqFaEWiNtqcSv86Vp-uW3S6ey_nLLFiGnMAMaVJMoMWCoaq25PqmLIOZdJFVp2L56RbbGIjmkJwxzd75ZKs2QPc81xhexct52Fr7VqTCfteFfas946NmnBZTXDGoZJ6uFbci-2Lz1HarnB3S5cCN7beMzVmUxPpycLQtcy0)



@startuml
actor Client
actor ServiceProvider
actor Admin

Client -> MobileApp : Register
Client -> MobileApp : Select Service & Payment Plan
Client -> PaymentGateway : Make Payment
Client -> MobileApp : Select Service Provider
Client -> MobileApp : Send Documents (Digitally / Courier)
MobileApp -> API_Server : Upload Documents
Client -> MobileApp : Request Service Status
API_Server -> DocumentStorage : Retrieve Documents
Client -> ServiceProvider : Interact (Mobile/WhatsApp)
ServiceProvider -> API_Server : Upload Processed Documents
API_Server -> DocumentStorage : Store Processed Documents
Admin -> AdminDashboard : Monitor Service Network
Admin -> API_Server : Assign Client to Service Provider
@enduml
