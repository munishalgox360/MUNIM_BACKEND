# MUNIM APP
Munim The Accoutant

<img src="https://play-lh.googleusercontent.com/uuzhLk9vS0HhUWqwtycV8cOWJKIVjgaui9I4SGhTTwXMKkD1tygQc4bOWLpDSlkSpoo=w240-h480-rw" height="100px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

>Try online billing and Accounting software for small businesses

# Developed By :- Algox360 IT Solutions LLP
<img src="https://algox360.com/img/logo.webp" height="40px">



[APP](//www.plantuml.com/plantuml/png/xLPDRnCn4BtdLvXme0MreXnxG0tza2hHDZJbmAcQsfFDg5vx6Sy68WI_dTsDgxRshcWGuWAvH9atRyP-yn4V106MkhIZPxB04jK2z2toQAGjXA0-peulhxKbTAA-ZLJpUQ6EG42T45eJr9RsPGKiPUkmjzrvF5ThmkcHsbSpON95j3ieCRML_ePiPiKIoAP6zhbZbz-jpg4SWgvMrH0qCOOnX05qkl1kY7dSTxw8lVSQXBmRW2-ne23SkJHIjXdQh-XK13clonlabDrG1m3sSx8u9IqrOuxY79dHJ67L5kaCPU5DwWLMph8wHA3tgW1c0Tn_80eJBRHiOxtptYAu3jZPKHVJuyl9rUd5-Qpv5RlfeiAr5aaplLatqm_5dLx8MzjDmAKdqzbVAUiBSgane4KjC-GbQKp14cunof12TMKzc2ElwnODAQp1QRGnRCur83XTb-4U_FveXiAQUrsnNv91tc2QxYZ_vZpzdwVOEXD6o6XB80jD8f9LYhMAkAAndbWFCZYR4S2l5JAXqpYGVkRdyWLoGRmxjBusMS3FDLYQKt_f8eZc4m8_BXYv82IrvD8PGsqii1_wG__5BKE5cnICsBTAuhZ6PH4st3HFMYPWId8RR93EVtXz3E-4trGqRbi71KwPT1CflIQ4LiD3Ipq2-YLoG9nKLIPEG3xhmaRXKtNkPDr06nCfkJpPAoPXz2t2821r-2C2naxfRv1Pb-UH0W-VQkEzSPFehHg_tjrzERwNPJy63QFUFwKdycB_9SuFy-_7wl_AFp_1FNDqWCwq3zEV)

@startuml
!theme hacker

class USER_client {
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

class USER_service_provider {
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

class USER_admin {
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

class Document {
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

USER_client "1" --> "0..*" Document : uploads
USER_service_provider "1" --> "0..*" Document : uploads
USER_admin "1" --> "0..*" USER_client : manages
USER_admin "1" --> "0..*" USER_service_provider : manages

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
