

export class Lifecycle{
    static listeners = new Map();
    static register(key){
        const path = key||window.location.pathname
        Lifecycle.listeners.set(path,new Map())
        Lifecycle.registerHooks(path)
        return Lifecycle;
    }
    static getListener(path){
       const listener =  Lifecycle.listeners.get(path)
        if(!listener){
            Lifecycle.register(path)
        }
       return  listener|| Lifecycle.listeners.get(path)
    }
    static getListenerHook(listener,hook){
        if(listener){
            return listener.get(hook)
        }
       
    }
    static registerHooks(path){
        const hooks = ['unload','beforeunload','statechange']
        hooks.forEach(hook =>{
            const pathMap = Lifecycle.listeners.get(path)
            pathMap.set(hook, new Set());
            pathMap.set('defaultEvent',false)
        })
    }
    static notify(key,hook){
        const listener = Lifecycle.getListener(key);
        const currentHook = Lifecycle.getListenerHook(listener, hook)
        currentHook.forEach(fun=>{
            if(typeof fun === 'function' ){
               fun() 
            }
        })
    }
    static addEventListener(hook,callback,key = window.location.pathname, ){
        if(hook && typeof callback === 'function' && key){
            const lifecycle =  Lifecycle.listeners.get(key).get(hook);
            lifecycle.add(callback)
        }
    }
    static removeEventListener(hook,key = window.location.pathname,){
        const listener =  Lifecycle.listeners.get(key);
        // 清空hook
        listener.get(hook).clear()
        listener.set('defaultEvent',false)
    }
    static preventDefault(path){
       return ()=>{
        const listener = Lifecycle.getListener(path);
        listener.set('defaultEvent',true)
       }
    }
    static getDefaultValue(path){
        const listener = Lifecycle.getListener(path);
        return listener.get('defaultEvent')
    }
    static beforeunload(path){
        const listener = Lifecycle.getListener(path);
        const currentHook = Lifecycle.getListenerHook(listener, 'beforeunload')
        currentHook.forEach(fun=>{
            if(typeof fun === 'function' ){
               fun({preventDefault:Lifecycle.preventDefault(path)}) 
            }
        })
    }

    static unload(path){
        Lifecycle.notify(path,'unload')
    }

}
