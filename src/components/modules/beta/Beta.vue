<template>
    <div>
        <Home :isBeta="true" />
    </div>
    
</template>

<script>
    import Home from '../home/Home.vue';
    export default {
        name: 'About',
        components: {
            Home,
        },
        data() {
            return {

            }
        },
        mounted() {
            if (!window.chatbot) {
                // reloading in case the package wasnt loaded
                window.location.reload();
            }
            this.initChatbot();
        },
        methods: {
            initChatbot() {
                window.chatbot.init({
                    chatflowid: "e057b68a-e2cc-4452-83cc-9bed0a435556",
                    apiHost: "http://35.232.116.109:3000",
                    chatflowConfig: {
                        // topK: 2
                    },
                    theme: {
                        button: {
                            backgroundColor: "#3B81F6",
                            right: 20,
                            bottom: 20,
                            size: "small",
                            iconColor: "white",
                            customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                            //customIconSrc: "https://icons.iconarchive.com/icons/dtafalonso/android-l/256/Chrome-Beta-icon.png",
                        },
                        chatWindow: {
                            welcomeMessage: "Oi! Aqui é o assis GPT beta",
                            backgroundColor: "#ffffff",
                            height: 700,
                            width: 400,
                            fontSize: 16,
                            poweredByTextColor: "#303235",
                            botMessage: {
                                backgroundColor: "#f7f8ff",
                                textColor: "#303235",
                                showAvatar: true,
                                avatarSrc: "https://s3.amazonaws.com/kommunicate-prod.s3/profile_pic/16317966636491631796659117-image414.png",
                            },
                            userMessage: {
                                backgroundColor: "#3B81F6",
                                textColor: "#ffffff",
                                showAvatar: true,
                                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                            },
                            textInput: {
                                placeholder: "Escreva sua pergunta",
                                backgroundColor: "#ffffff",
                                textColor: "#303235",
                                sendButtonColor: "#3B81F6",
                            }
                        }
                    }
                });
            }
        }
    }
</script>

<style>

</style>