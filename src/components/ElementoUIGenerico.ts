import { verifica_permisos } from '../helpers/rbac'
import { setTransitionHooks, shallowRef } from "vue"

//import Button from "primevue/button";
//import CalendarInput from './CalendarInput'
import BtnFileInput from "./BtnFileInput.vue"

class ElementoInterfaz {
  public class    = ''
  public label    = '' 
  public for      = ''
  public disabled = false 
  public visible  = true
  public control_params = {}

  props_config = ['class', 'control_params', 'permisos', '_click', 'visible','_visible', 'label', '_label', 'disabled', '_disabled']

  permisos = []
  //fija la visibilidad del elemento, el mismo debe ser visible si tiene permisos y cumple la condición especificada
  __visible = ()=>{ 
    let tiene_permiso = false

    if (this.permisos.length == 0){ //si no se especifican permisos, quiere decir que se muestra a todxs
      tiene_permiso = true
    } else {
      tiene_permiso = verifica_permisos(this.permisos)
    }

    return tiene_permiso && this._visible() 
  }

  _click    = ()=>{ return true }
  _visible  = ()=>{ return this.visible }
  _label    = ()=>{ return this.label }
  _disabled = ()=>{ return this.disabled }

  constructor(params:any, props_config:any){
    this.props_config = this.props_config.concat(props_config)
        
    for (let c=0; c < this.props_config.length; c++){
      this.control_params = params.control_params
      //if (params.hasOwnProperty(this.props_config[c]) && params[this.props_config[c]] != undefined)
      //  this[this.props_config[c]] = params[this.props_config[c]]
    }
  }
}

export class BtnUploadConfig extends ElementoInterfaz {
  componente = shallowRef(BtnFileInput)
 
  constructor (params:any){
    super(params, ['icon'])
  }
}
/*
export const BtnConfig = class extends ElementoInterfaz {
  componente = shallowRef(Button)
 
  constructor (params){
    super(params, ['icon'])
  }
}

export const InlineDateConfig = class extends ElementoInterfaz {
  componente = shallowRef(CalendarInput)
 
  constructor (params){
    super(params, ['valor_inicial'])

  }
}*/