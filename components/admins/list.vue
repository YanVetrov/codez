<template>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title">{{$t('contacts')}}</h3>
                <div class="scrollable">
                    <div class="table-responsive">
                        <table id="demo-foo-addrow" class="table m-t-30 table-hover contact-list" data-page-size="10">
                            <thead>
                            <tr>
                                <th>{{$t('name')}}</th>
                                <th>{{$t('nick')}}</th>
                                <th>{{$t('link')}}</th>
                                <th>LVL</th>
                                <th>{{$t('created')}}</th>
                                <th>{{$t('lastupd')}}</th>
                                <th>{{$t('action')}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="admin in admins" :key="admin.id">
                                <td v-if='!admin.edit'>{{admin.name}}</td>
                                <td v-else><input v-model='admin.name'/></td>
                                <td v-if='!admin.edit'>
                                    <a :href="admin.link" ><i :class=" 'fa fa-'+admin.icon "></i>{{admin.value}}</a>
                                </td>
                                <td v-else><input v-model='admin.value'  /></td>
                                <td v-if='!admin.edit'><a :href="admin.link">{{admin.link}}</a></td>
                                <td v-else><input v-model='admin.link'/></td>
                                <td><span class="label label-info">10</span></td>
                                <td>{{admin.createdAt.split('T')[0]}}<br/> {{admin.createdAt.split('T')[1].slice(0,8)}}</td>
                                <td>{{admin.updatedAt.split('T')[0]}}<br/> {{admin.updatedAt.split('T')[1].slice(0,8)}}</td>
                                <td>
                                    <button type="button" @click="deleteAdmin(admin._id)"
                                            class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn"
                                           ><i class="ti-close"
                                             ></i>
                                    </button>
                                    <button @click='admin.edit = !admin.edit'>{{admin.edit?'Close':'Edit'}}</button>
                                    <button @click='editAdmin(admin.value,admin.name,admin._id,admin.link)' v-if='admin.edit'>Save</button>
                                </td>
                            </tr>

                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="2">
                                    <button type="button" class="btn btn-info btn-rounded" @click="show=true">{{$t('add')}}
                                    </button>
                                </td>
                                <transition name="fade">
                                <div v-if="show" id="add-contact" class="modal fade in" tabindex="-1" role="dialog"
                                     aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal"
                                                        aria-hidden="true">×
                                                </button>
                                                <h4 class="modal-title" id="myModalLabel">{{$t('add')}}</h4></div>
                                            <div class="modal-body">
                                                <div class="form-horizontal form-material">
                                                    <div class="form-group">
                                                        <div class="col-md-12 m-b-20">
                                                            <input type="text" class="form-control"
                                                                   placeholder="Type name" v-model="name"></div>
                                                       <div class="col-md-12 m-b-20">
                                                            <input type="text" class="form-control" placeholder="Nick"
                                                                   v-model="value"></div>
                                                        <div class="col-md-12 m-b-20">
                                                            <input type="text" class="form-control" placeholder="Link"
                                                                   v-model="link"></div>
                                                        <div class="col-md-12 m-b-20">
                                                            <div class="fileupload btn btn-danger btn-rounded waves-effect waves-light">
                                                                <span><i class="ion-upload m-r-5"></i>Upload Contact Image</span>
                                                                <input type="file" class="upload"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-info waves-effect"
                                                        @click.prevent="newAdmin">{{$t('add')}}
                                                </button>
                                                <button type="button" class="btn btn-default waves-effect"
                                                        @click="show=false">{{$t('cancel')}}
                                                </button>
                                            </div>
                                        </div>
                                        <!-- /.modal-content -->
                                    </div>
                                    <!-- /.modal-dialog -->
                                </div>
                                </transition>
                                <td colspan="7">
                                    <div class="text-right">
                                        <pagination :currentPage="current_page" :totalPages="total_page"
                                                @page-changed="getAdmins"/>
                                    </div>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                total_page: 1,
                current_page: 1,
                name: '',
                email: '',
                link: '',
                skype: '',
                value: '',
                ids: {},
                admins: [

                ],
                show: false,


            }
        },
        methods: {

            newAdmin() {
                this.$root.$emit('loading', true);
                let obj = {};
                this.name && this.name !== '' ? obj.name = this.name : '';
                this.link && this.link !== '' ? obj.link = this.link : '';
                this.value && this.value !== '' ? obj.value = this.value : '';
                this.$rest.api('addContact', obj)
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.admins.push(obj);
                            this.$notify({
                                duration: 5000,
                                type: 'info',
                                title: 'OK',
                                text: 'new contact added'
                            });
                            this.show = false;


                        }
                        else {
                            this.$notify({
                                duration: 5000,
                                type: 'error',
                                title: 'Bad',
                                text: "Something wrong..."
                            })
                        }


                        this.$root.$emit('loading', false);
                    })


            },
            getAdmins(page) {
                this.$root.$emit('loading', true);
                this.$rest.api('getContacts', { page, limit: 10 })
                    .then(res => {
                        if (res.success) {
                            res.data.contacts.forEach(el => {
                                el.edit = false;
                            })
                            this.admins = res.data.contacts;
                            this.current_page = res.data.count.select_page || 1;
                            this.total_page = res.data.count.pages || 1;

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Error get admins!',
                                text: res.error.message,
                            });
                            this.$router.back();
                        }
                        this.$root.$emit('loading', false);

                    })
                    .catch(err => {
                        this.$root.$emit('loading', false);
                    })
            },
            deleteAdmin(contact_id) {
                this.$rest.api('deleteContact', { contact_id })
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.admins.forEach((el, i) => {
                                if (el.id == contact_id) {
                                    this.admins.splice(i, 1);
                                }

                            })
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Contact successful deleted`,
                            });

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Something wrong...',
                                text: res.error.message,
                            });
                        }
                        this.$root.$emit('loading', false);
                    })
                    .catch(err => {
                        this.$root.$emit('loading', false);
                    })

            },
            editAdmin(value, name, contact_id, link) {

                this.$rest.api('editContact', { value, name, contact_id, link })
                    .then(res => {
                        console.log(res);
                        if (res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'success',
                                title: `Contact successful edited`,
                            });

                        }
                        if (!res.success) {
                            this.$notify({
                                group: 'main',
                                duration: 5000,
                                type: 'error',
                                title: 'Something wrong...',
                                text: res.error.message,
                            });
                        }
                    })

            }


        },
        mounted() {
            return this.getAdmins();
        }
    }
</script>

<style scoped>
   
    .modal {
        display: block;
        opacity: 1;
        background:rgba(0,0,0,0.3);
        transition:background 0.2s;

    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s ease;
    }

    .fade-enter,
    .fade-leave-to {
        opacity:0;
    }
</style>
