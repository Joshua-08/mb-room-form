var app = new Vue({
    el: '#room-form-widget',
    data: {
        roomsData: [
            {   // index 0
                'id': 'room_1',
                'label': 'Room 1',
                'dates': [
                    {
                        'id': 'mon-30-04-18',
                        'date': '2018-04-30',
                        'options': [
                            {
                                'id': 1,
                                'title': 'Deluxe Quad 1',
                                'capacity': 4,
                                'price': '3,350',
                                'description': 'Lorem ipsum dolor sit amet.'
                            },
                            {
                                'id': 2,
                                'title': 'Deluxe Double 1',
                                'capacity': 2,
                                'price': '2,350',
                                'description': 'Lorem ipsum dolor sit amet.'
                            }
                        ]
                    },
                    {   // index 1
                        'id': 'tue-01-05-18',
                        'date': '2018-05-01',
                        'options': [
                            {
                                'id': 1,
                                'title': 'Deluxe Quad 2',
                                'capacity': 4,
                                'price': '3,350',
                                'description': 'Lorem ipsum dolor sit amet.'
                            },
                            {
                                'id': 2,
                                'title': 'Deluxe Double 2',
                                'capacity': 2,
                                'price': '2,350',
                                'description': 'Lorem ipsum dolor sit amet.'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'room_2',
                'label': 'Room 2',
                'dates': [
                    {
                        'id': 'mon-40-04-18',
                        'date': '2018-04-30',
                        'options': [
                            {
                                'id': 1,
                                'title': 'Deluxe Quad 3',
                                'capacity': 4,
                                'price': '3,350',
                                'description': 'Lorem ipsum dolor sit amet.'
                            },
                            {
                                'id': 2,
                                'title': 'Deluxe Double 3',
                                'capacity': 2,
                                'price': '2,350',
                                'description': 'Lorem ipsum dolor sit amet.'
                            }
                        ]
                    },
                    {
                        'id': 'tue-01-05-18',
                        'date': '2018-05-01',
                        'options': [
                            {
                                'id': 1,
                                'title': 'Deluxe Quad 4',
                                'capacity': 4,
                                'price': '3,350',
                                'description': 'Lorem ipsum dolor sit amet.'
                            },
                            {
                                'id': 2,
                                'title': 'Deluxe Double 4',
                                'capacity': 2,
                                'price': '2,350',
                                'description': 'Lorem ipsum dolor sit amet.'
                            }
                        ]
                    }
                ]
            }
        ],
        activeTab: 0,
        activePills: [],
        activeRooms: [],
        childIndex:[],
        childGuest:[
            {
                'child1':'',
                'child2':''
            },
            {
                'child1': '',
                'child2': ''
            }
        ]
    },

    methods: {
        activatePill: function(index, dateId) {
            Vue.set(this.activePills, index, dateId);
        },

        activateRoom: function(index, dateId, roomId) {

            if(this.activeRooms[index] === undefined) {
                Vue.set(this.activeRooms, index, {});
            }
            var room = this.activeRooms[index];
            Vue.set(room, dateId, roomId);
        },

        isRoomActive: function (index, dateId, roomId) {
            if (this.activeRooms[index] === undefined) {
                Vue.set(this.activeRooms, index, {});
            }
            var room = this.activeRooms[index];
            if (room[dateId] === roomId) {
                return 'table-active';
            }
        },

        initPills: function() {
            var activePills = this.activePills;
            this.roomsData.forEach(function(roomData, index){
                roomData.dates.some(function(date, dateIndex){
                    Vue.set(activePills, index, date.id);
                    return (dateIndex === 0);
                });
            });
        }
    },

    created: function() {
        this.initPills();
    }
});