import * as Yup from "yup"

export const bookValidation = Yup.object().shape({
    title: Yup.string().required("Это поле обязятельно для заполнения"),
    year: Yup.number().required("Необходимо указать год публикации"),
    author_id: Yup.number().required("Необходимо выбрать автора"),
})

export const authorValidation = Yup.object().shape({
    first_name: Yup.string().required("Это поле обязятельно для заполнения"),
    last_name: Yup.string().required("Это поле обязятельно для заполнения"),
})
