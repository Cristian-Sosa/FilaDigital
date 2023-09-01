export interface IToast {
    text: 'Debes ingresar tu turno' | string | 'Pronto será tu turno' | 'Tu turno está siendo atendido';
    icon: {
        type: 'bell' | 'exclamation',
        route: '/assets/icons/bell.svg' | '/assets/icons/exclamation-circle.svg'
    };
    show: boolean
}