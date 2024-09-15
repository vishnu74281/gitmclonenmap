class BGWhatsAppBtn {

    constructor({ dialcode, phone, text}) {
        this.dialcode = dialcode
        this.phone = phone
        this.text = text
    } 
    
    renderButton() {
        let fontAwesome = document.createElement('script')
        //fontAwesome.setAttribute('src', 'https://use.fontawesome.com/releases/v5.2.0/js/all.js')
        document.body.appendChild(fontAwesome)

        let roboto = document.createElement('link')
        //roboto.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto&display=swap')
		//roboto.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css')
        roboto.setAttribute('rel', 'stylesheet')
        document.body.appendChild(roboto)

        let styles = document.createElement('link')
        styles.setAttribute('href', 'https://www.brainguru.in/whatsapp/whatsapp-widget.css')
        styles.setAttribute('rel', 'stylesheet')
        styles.setAttribute('type', 'text/css')
        document.body.appendChild(styles)

        let root = document.createElement('div')
        root.className = 'WhatsAppButton__root'
        root.setAttribute('style', 'position: fixed; bottom: 10px; left: 10px;')
        document.body.appendChild(root);

            let button_root = document.createElement('a')
            button_root.setAttribute('href', `https://api.whatsapp.com/send?phone=${this.dialcode}${this.phone}&text=${this.text}&lang=en`)
            button_root.setAttribute('style', 'text-decoration: none')
            button_root.setAttribute('target', '_blank')
            root.appendChild(button_root)

                let button = document.createElement('button')
                button.setAttribute('class', 'landbot-whatsapp__button')
                button_root.appendChild(button)

                    let whatsappIcon = document.createElement('i')
                    whatsappIcon.setAttribute('class', 'fa fa-whatsapp fa-7x')
                    whatsappIcon.setAttribute('style', 'font-size: 24px; margin-right: 5px')
                    button.appendChild(whatsappIcon)

                    let button_text = document.createElement('p')
                    button_text.setAttribute('style', 'margin: 0')
                    button_text.innerText = 'Send Via WhatsApp'
                    button.appendChild(button_text)
            
            let poweredByButton = document.createElement('a')
            poweredByButton.setAttribute('href', 'https://www.brainguru.in/?utm_source=WhatsAppButton')
            poweredByButton.setAttribute('class', 'whatsapp__poweredBy')
            poweredByButton.setAttribute('target', '_blank')
            poweredByButton.innerText = 'WhatsApp ⚡️ by Brainguru.in'
            root.appendChild(poweredByButton)
    
    }
}