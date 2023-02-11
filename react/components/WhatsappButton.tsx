import React from 'react';
import PropTypes from "prop-types";
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
    "containerOne__buttonWhatsapp",
    "containerTwo__buttonWhatsapp",
    "button__whatsapp"
]

type Props = {
    logo: string,
    phone: string,
    message: string,
    width: number,
    height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const handles = useCssHandles(CSS_HANDLES);
    const formattedMessage = message.replace(/ /g, "%20");
    return <div className={handles.containerOne__buttonWhatsapp}>
        <div className={handles.containerTwo__buttonWhatsapp}>
            <a
                href={`https://wa.me/${phone}?text=${formattedMessage}`}
                target="_blanck"
                rel="noreferrer noopener"
                className={handles.button__whatsapp}
            >
                <img src={logo}
                    width={width}
                    height={height}
                    alt="Logo de Whatsapp" />
            </a>
        </div>
    </div>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    phone: "12345678",
    message: "Bienvenido a Velez!"
}

WhatsappButton.schema = {
    title: "Boton de Whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de whatsapp que se relaciona con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Telefono",
            description: "Agrega por favor el numero de telefono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrega por favor el mensaje que se vera para tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Ancho del boton",
            type: "number"
        },
        height: {
            title: "Largo del boton",
            type: "number"
        }
    }
}

export default WhatsappButton;