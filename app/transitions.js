export default function() {
  
  var duration = 100;

  this.transition(
    this.fromRoute('about.index'),
    this.toRoute('about.news-item'),
    this.use('explode', {
      matchBy: 'data-item-id',
      use: ['flyTo', { duration } ]
    }, {
      matchBy: 'data-heading-id',
      use: ['flyTo', { duration } ]
    },
     {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-item-id',
      use: ['flyTo', { duration } ]
    }, {
      matchBy: 'data-heading-id',
      use: ['flyTo', { duration } ]
    },
    {
      use: ['toRight', { duration } ]
    })
  );
  
  this.transition(
    this.fromRoute('events.index'),
    this.toRoute('events.event'),
    this.use('explode', {
      matchBy: 'data-event-id',
      use: ['flyTo', { duration } ]
    }, {
      matchBy: 'data-heading-id',
      use: ['flyTo', { duration } ]
    },
    {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-event-id',
      use: ['flyTo', { duration } ]
    },  {
      matchBy: 'data-heading-id',
      use: ['flyTo', { duration } ]
    },{
      use: ['toRight', { duration } ]
    })
  );

  this.transition(
    this.use('fade', {duration: duration}),
    this.reverse('fade', {duration: duration})
  );

  this.transition(
    this.fromRoute('shows.index'),
    this.toRoute('shows.show'),
    this.use('scrollThen', 'toLeft', {duration: duration}),
    this.reverse('scrollThen', 'toRight')
  );

  this.transition(
    this.hasClass('filteringByCategory'),
    this.use('toDown', {duration: 100}),
    this.reverse('toUp', {duration: 100})
  );

}