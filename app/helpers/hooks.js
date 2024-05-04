import { useEffect, useState } from "react";
import { hideLoader, showLoader } from "../components/common/loader";
import { notification } from "antd";
import Swal from "sweetalert2";

export const useFetch = (func, query = {}, load = true) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(load)
    const [error, setError] = useState('')
    const [params, setParams] = useState(query)

    useEffect(() => {
        if (load) {
            getData(params)
        }
    }, []);

    const getData = (query) => {
        setLoading(true)
        setError('')
        setParams({ ...params, ...query })
        func({ ...params, ...query }).then(({ error, data, msg }) => {
            setLoading(false)
            if (error === false) {
                setData(data)
            } else {
                setData(undefined)
                setError(msg)
            }
        }).catch(e => {
        })
    }
    const clear = () => setData(undefined)
    return [data, getData, { query: params, loading, error, clear }];
}

export const useAction = async (func, data, reload, alert = true, successMsg) => {
    // showLoader()
    const { error, msg, data: d } = await func({ ...data })
    // hideLoader()
    if (error === false) {
        if (reload) {
            reload(d)
        }
        if (alert) {
            notification.success({ message: successMsg || msg || 'Success' })
        }
    } else {
        notification.error({ message: msg || 'Something went wrong' })
    }
}

export const useActionConfirm = async (func, data, reload, message, confirmText, alert = true) => {
    const { isConfirmed } = await Swal.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'warning',
        showCancelButton: true,
    })
    if (isConfirmed) {
        await useAction(func, data, reload, alert)
    }
}


export const userOutSideClick = (ref, func) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                func && func()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}