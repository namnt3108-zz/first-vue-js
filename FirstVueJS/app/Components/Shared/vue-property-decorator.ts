import { createDecorator } from "vue-class-component"
import "reflect-metadata"

export function Inject(key) {
    return createDecorator((componentOptions, k) => {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[k] = key || k;
        }
    });
}

export function Model(event) {
    return createDecorator((componentOptions, prop) => {
        componentOptions.model = { prop: prop, event: event || prop };
    });
}

export function Prop(options) {
    if (options === void 0) { options = {}; }
    return (target, key) => {
        if (!Array.isArray(options) && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
        createDecorator((componentOptions, k) => {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}

export function Watch(path, options) {
    debugger;
    if (options === void 0) { options = {}; }
    var a = options.deep, deep = a === void 0 ? false : a, b = options.immediate, immediate = b === void 0 ? false : b;
    return createDecorator((componentOptions: any, handler: any) => {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}