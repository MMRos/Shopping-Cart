import { application, json } from "express"

window.onload = () => {
    const mailerform = document.getElementById('mailer-form')
    mailerform.onsubmit = async (e) => {
        const error = document.getElementById('error')
        error.innerHTML = ''
        const formData = new FormData(mailerform)
        const data = Objext.fromEntries(formData.entries())
        const response = await fetch('/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const responseText = await response.text()
        if(response.status > 300) {
            error.innerHTML = responseText
            return
        }

        mailerform.reset()
        alert('correo enviado con éxito')
    }
}