import router from './router'

export class Lifecycle {
    static listeners = new Map();
    static register(ref = null, key) {
        const path = key || window.location.pathname
        Lifecycle.listeners.set(path, new Map())
        Lifecycle.initEvent(path, ref)
        if (ref) {
            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, { passive: false });
        }
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, { passive: false });
        return Lifecycle;
    }
    static getListener(path) {
        const listener = Lifecycle.listeners.get(path)
        if (!listener) {
            Lifecycle.register(null, path)
        }
        return listener || Lifecycle.listeners.get(path)
    }
    static getListenerHook(listener, hook) {
        if (listener) {
            return listener.get(hook)
        }

    }
    static start(target, path) {

    }
    static initEvent(path, ref) {
        const hooks = ['unload', 'beforeunload', 'statechange']
        const pathMap = Lifecycle.listeners.get(path)
        hooks.forEach(hook => {
            pathMap.set(hook, new Set());
            pathMap.set('defaultEvent', false)
        })
        pathMap.set('target', ref)

    }
    static notify(key, hook) {
        const listener = Lifecycle.getListener(key);
        const currentHook = Lifecycle.getListenerHook(listener, hook)
        currentHook.forEach(fun => {
            if (typeof fun === 'function') {
                fun()
            }
        })
    }
    static addEventListener(hook, callback, key = window.location.pathname,) {
        if (hook && typeof callback === 'function' && key) {
            const lifecycle = Lifecycle.listeners.get(key).get(hook);
            lifecycle.add(callback)
        }
    }
    static removeEventListener(hook, key = window.location.pathname,) {
        const listener = Lifecycle.listeners.get(key);
        // 清空hook
        listener.get(hook).clear()
        listener.set('defaultEvent', false)
        window.history.back();
    }
    static preventDefault(path) {
        return () => {
            const listener = Lifecycle.getListener(path);
            listener.set('defaultEvent', true)
        }
    }
    static getDefaultValue(path) {
        const listener = Lifecycle.getListener(path);
        return listener.get('defaultEvent')
    }
    static getTarget(path) {
        const listener = Lifecycle.getListener(path);
        return listener.get('target')
    }
    static beforeunload(path) {

        const listener = Lifecycle.getListener(path);
        const currentHook = Lifecycle.getListenerHook(listener, 'beforeunload')
        console.log('beforeunload', path, currentHook)
        currentHook.forEach(fun => {
            if (typeof fun === 'function') {
                fun({ preventDefault: Lifecycle.preventDefault(path) })
            }
        })
        // const defaultValue = Lifecycle.getDefaultValue(path)
    }

    static unload(path) {
        Lifecycle.notify(path, 'unload')
    }

}
