# Whatsapp Button

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)]
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The Whatsapp Button Component that allows you to send a personalized message to the whatsapp of the store

![image](https://user-images.githubusercontent.com/94373834/219819510-082eaa2e-ea72-47f5-9714-0ef5b9f72d25.png)



## Configuration 

1. Import the whatsapp-button's app to your theme's dependencies in the manifest.json, for example:

```json
{
  "dependencies": {
    "vendor.whatsapp-button": "0.x"
  }
}
```

2. Add the whatsapp-button block to the store-theme. For example:

```json
"flex-layout.row": {
    "title": "Layout Whatsapp-Button",
    "children": [
      "whatsapp-button"
    ]
  },
  "whatsapp-button": {
    "props": {
      "logo": "*here is the logo you want*",
      "phone": "12345678",
      "message": "I want more information, please",
      "width": "100px, *it's not mandatory*",
      "height": "100px, *it's not mandatory*"
    }
  }
  ```
  
  ### The whatsapp-button props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `logo`        | `String`       | Define the url of the image that will be used for the whatsapp button          | `undefined`              |
| `phone`  | `String`        | Defines the WhatsApp number that the store uses to provide customer service        | `12345678` |
| `message` | `String`        | Define the welcome message that the client will see when entering the WhatsApp chat      | `Bienvenido a Velez!` |
| `width` | `Number`        | Define the width of the button                                                             
| `height` | `Number`        | Define the height of the button                                                             

## Customization
    
```sh
    "containerOne__buttonWhatsapp",
    "containerTwo__buttonWhatsapp",
    "button__whatsapp"
```
<!-- DOCS-IGNORE:start -->

## Contributors

1. [Danilo Ibañez](https://www.linkedin.com/in/danilo-ib%C3%A1%C3%B1ez-519a4023a/)


<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
