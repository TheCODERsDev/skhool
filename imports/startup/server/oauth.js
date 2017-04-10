import { Meteor } from 'meteor/meteor';

const { facebook } = Meteor.settings.private.oAuth;

ServiceConfiguration.configurations.upsert({ service: 'facebook' }, {
  $set: facebook,
});
