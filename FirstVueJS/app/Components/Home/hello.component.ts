import * as Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from '../Shared/vue-property-decorator'


// The @Component decorator indicates the class is a Vue component
@Component({
    // All component options are allowed in here
    template: "#hello-component-template"
})

export default class HelloComponent extends Vue {
    // Initial data can be declared as instance properties
    question: string = '';
    answer: string = 'I cannot give you an answer until you ask a question!';
    // Component methods can be declared as instance methods
    onClick(): void {
        window.alert(this.answer);
    }

    getAnswer(): void {
        debugger;
        if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)';
        } else {
            this.answer = 'Thinking...';
        }

    }

    @Watch('question', { immediate: false, deep: true })
    onMessageChanged(newMessage: string): void {

        this.answer = 'Waiting for you to stop typing...';
        this.getAnswer();

    }
}