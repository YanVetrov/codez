<template>
  <div class="row">
                    <div class="col-md-24">
                        <div class="white-box">
                            <ul class="timeline"  >
                                <li class="timeline-inverted" v-for="list in lists" :key="list.id">
                                    <div class="timeline-badge success"> </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">{{oper(list.operation)}}</h4>
                                            <p><small class="text-muted"><i class="fa fa-clock-o"></i> {{list.time}}</small> </p>
                                            <p><small class="text-muted"><i class="fa fa-user"></i> {{list.user}}</small> </p>
                                        </div>
                                        <div class="timeline-body">
                                            <p>{{getTitle(list.operation)}} {{list.currency}} : {{list.total}} {{list.short}}</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-badge warning"> </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Ritesh Deshmukh</h4> </div>
                                        <div class="timeline-body">
                                            <p></p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-badge danger"></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Lorem ipsum dolor</h4> </div>
                                        <div class="timeline-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Lorem ipsum dolor</h4> </div>
                                        <div class="timeline-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-badge info"> </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Lorem ipsum dolor</h4> </div>
                                        <div class="timeline-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>
                                            <hr>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-gear"></i> <span class="caret"></span> </button>
                                                <ul class="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a> </li>
                                                    <li><a href="#">Another action</a> </li>
                                                    <li><a href="#">Something else here</a> </li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-badge success"> </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Lorem ipsum dolor</h4> </div>
                                        <div class="timeline-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
</template>

<script>
    export default {
      data(){
        return{
          lists:[
            {currency:'Private UAH',short:'UAH',total:'11',operation:"1",time:"24.06.2018 13:44",user:"Sergey12[id:422] serg@gmail.com 194.22.42.122 "},
            {currency:'Private UAH',short:'UAH',total:'15',operation:"1",time:"21.05.2018 24:54",user:"Sergey12[id:422] serg@gmail.com 194.22.42.122 "},
            {currency:'Private UAH',short:'UAH',total:'223',operation:"1",time:"24.04.2018 13:44",user:"Sergey12[id:422] serg@gmail.com 194.22.42.122 "},
            {currency:'Private UAH',short:'UAH',total:'55',operation:"1",time:"14.03.2018 23:34",user:"Sergey12[id:422] serg@gmail.com 194.22.42.122 "},
            {currency:'Private UAH',short:'UAH',total:'32',operation:"1",time:"22.03.2018 13:44",user:"Sergey12[id:422] serg@gmail.com 194.22.42.122 "},
            {currency:'Private UAH',short:'UAH',total:'235',operation:"1",time:"25.02.2018 12:54",user:"Sergey12[id:422] serg@gmail.com 194.22.42.122 "},
          ]


        }

      },
      methods:{
        oper(num){
          switch(num){
            case '1':
            return 'Изменение счёта'
            break;
            default:
            return 'Неизвестная операция'
            break;
          }


        },
        getTitle(num){
        switch(num){
          case '1':
            return 'Администратор отредактировал  -'
            break;
          default:
            return 'Неизвестная операция'
            break;
          }
        this.$rest.api('getInfo')
        .then((res)=>{console.log(res)})


        }


      }
    }
</script>

<style scoped>
  .history-block {
    color:#666;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }

  .history-info{
    border-radius: 3px;
    width: 95%;
    display: flex;
    flex-direction:column;
    background: rgba(245,245,245,1);
    padding: 15px;


  }
  .history-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #CCC;
    padding: 5px;


  }
  .history-operation{
    padding: 5px;

  }
  .history-icon{
    display: flex;
    justify-content: center;
    align-items:center;
    width: 5%;
  }
  .date{
    padding: 15px;
    position: relative;
    top: -50%;
    font-size: 8px; 
  }






</style>
