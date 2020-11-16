import {appRouter} from '../../router/Router';


declare var require: any

const pug = require('pug');
import Component from '../../components/Component';
import ChatUserList from '../../components/ChatUserList';
import ChatUserItem from '../../components/ChatUserItem';
import ChatUserAvatar from '../../components/ChatUserAvatar';
import {IAnyObject} from '../../utils/ts/interfaces';
import template from './chat.templ';
import {store} from '../../store/Store';
// import {chatApi} from '../../API/ChatAPI';
// import {appRouter} from '../../router/Router';

interface IUserItems {
    id: number,
    title: string,
    avatar: string
}

export default class PageChat extends Component {
    props: IAnyObject;

    constructor(props?: IAnyObject) {
        super('div', {
            ...props,
            userAvatar: new ChatUserAvatar({
                title: 'Показать профиль',
                src: store.props.user.avatar,
                alt: '',
                classes: 'cursor-pointer',
                listeners: [
                    {event: 'click', fn: () => appRouter.go('/profile')}
                ]
            }),
            chatsList: new ChatUserList({
                items: store.props.chats.map((opt: IUserItems) => {
                    return new ChatUserItem({
                        ...opt,
                        listeners: [
                            {
                                event: 'click', fn: (event: Event) => {
                                    if (event.currentTarget instanceof HTMLElement) {
                                        let chatId = event.currentTarget.dataset.chatId

                                        console.log(chatId)
                                    }
                                }
                            }
                        ]
                    });
                })
            })
        });
    }

    componentDidRender() {
        document.title = `BLABLA - чат`;
    }

    render(): string {
        return pug.render(template, {
            key: this.props.key,
            chatsList: this.props.chatsList.render(),
            userAvatar: this.props.userAvatar.render(),
        });
    }
}