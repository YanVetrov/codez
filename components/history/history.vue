<template>
                        <div class="col-md-24">
                        <div class="white-box">
                            <ul class="timeline"  >
                                <li class="timeline-inverted" v-for="list in history" :key="list.id">
                                    <div class="timeline-badge info"> <i class="fa" :class="'fa-'+getIcon(list.operation)"></i> </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">{{oper(list.operation)}}</h4>
                                            <p><small class="text-muted"><i class="fa fa-clock-o"></i> {{list.time}}</small> </p>
                                            <p><small class="text-muted"><i class="fa fa-user"></i> {{list.user}}[{{list.id}}] {{list.email}} {{list.ip}}</small> </p>
                                        </div>
                                        <div class="timeline-body">
                                            <p>{{getTitle(list.operation)}} {{list.currency}} : {{list.total}} {{list.short}}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                                                                                            <div class="text-right">

                                        </div>
                        </div>
                    </div>

</template>

<script>
    export default {
        props: ['history'],
        data() {
            return {
                operations: {
                    change: 'Changing operation',
                    enter: 'Transaction operation'
                },
                description: {
                    change: 'Changed from',
                    enter: 'Transaction would be ready'
                },
                icons: {
                    change: 'exchange',
                    enter: 'sign-in'
                }
            }
        },
        methods: {
            oper(type) {
                for (let k in this.operations) {
                    if (k == type) {
                        return this.operations[type];
                    }

                }
                return 'Unknown';

            },
            getTitle(type) {
                for (let k in this.description) {
                    if (k == type) {
                        return this.description[type];

                    }

                }
                return 'Unknown operation';
            },
            getIcon(type) {

                for (let k in this.icons) {
                    if (k == type) {
                        return this.icons[type];

                    }

                }
                return 'question-circle';

            }




        }
    }
</script>


<style scoped>
    .history-block {
        color: #666;
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 15px;
    }

    .history-info {
        border-radius: 3px;
        width: 95%;
        display: flex;
        flex-direction: column;
        background: rgba(245, 245, 245, 1);
        padding: 15px;


    }

    .history-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #CCC;
        padding: 5px;


    }

    .history-operation {
        padding: 5px;

    }

    .history-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5%;
    }

    .date {
        padding: 15px;
        position: relative;
        top: -50%;
        font-size: 8px;
    }

    .timeline::before {
        left: 15px;
    }

    .timeline>li.timeline-inverted>.timeline-panel {
        float: none;
        left: 50px;
    }

    .timeline>li>.timeline-panel {
        float: none;
        position: relative;
        width: 100%;
    }

    .timeline>li>.timeline-badge {
        left: 15px;
    }
</style>
