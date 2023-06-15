export const changeData = (key, value, data, setData) => {
    setData ({
        ...data,
        [key]: value
    })
}