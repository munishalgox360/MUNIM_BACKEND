# MUNIM APP
Munim The Accoutant

<img src="https://play-lh.googleusercontent.com/uuzhLk9vS0HhUWqwtycV8cOWJKIVjgaui9I4SGhTTwXMKkD1tygQc4bOWLpDSlkSpoo=w240-h480-rw" height="100px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

>Try online billing and Accounting software

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




[WORK FLOW](//www.plantuml.com/plantuml/png/XPEnRjmm38PtFGMRwJ84tJiKELoM34qE3OhEhCopYSYK8D5N-ErhsIVLE5_QoP3vy-DFYdfCYb67tfbFsb5FaDv9RJS--44T2nc3Lds4WsCIlHpUA9xPqZ7wCpSKBt_tJSzYJC2eR3cWADpjhVM3A4iB-n3k05F-6hFWuE5hFi8N-4uj9wK8kz-i7JXlKTdBlSdXIRNe9-71oubZVqc8isf3UoD7LejDG6dWY6EVDKU7ie4-SGeEnofw3HcRDjnl-4v5z96pg_Zrh2RXFYLk1Lu8uw-ncgp3l4fOpyWIdwbKN33_BlNYbK_ZMhgbrmwAXMffDmJdiO76so4df_iRavO6daeSTdo2XbjMTE0ZM3z4fdZ_SKy_SeKrGVtanmzDgNIphMTHYcWLTcT6m10-_-nGquIyLMfpHIN_vkuSK2pDxWyTIbkdyRyXby05u33J_sACcP_7UfS4stpjR5dQlAELa7SqbNfBMjtHqinQNxqyoyblwdZX-SsEIQcVyru3HLms_96a6Nht1m00)



@startuml
!theme sketchy-outline

actor Client
actor ServiceProvider
actor Admin

participant "Accounting App" as App

Client -> App : Register (with location)
App -> Client : Confirm Registration
Client -> App : Select Service and Payment Plan
App -> Client : Display Payment Options
Client -> App : Make Payment
App -> Client : Confirm Payment
App -> ServiceProvider : Assign Nearby Service Provider
ServiceProvider -> App : Receive Client Assignment
App -> ServiceProvider : Notify Assignment
ServiceProvider -> Client : Provide Service (upload documents)
Client -> App : Send Documents (if digital or courier)
ServiceProvider -> App : Upload Documents to Cloud
Client -> ServiceProvider : Interact (via app/WhatsApp)
ServiceProvider -> Client : Confirm Interaction
Client -> App : Cancel or Change Service
App -> ServiceProvider : Notify Service Cancellation or Change

Admin -> App : Manage Pricing and Service Plans
App -> Admin : Display Client and Service Provider Info
Admin -> App : Monitor System and Operations
@enduml