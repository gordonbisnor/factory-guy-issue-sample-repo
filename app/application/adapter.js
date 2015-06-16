import DS from 'ember-data';
import ENV from 'ckdu-ember/config/environment';
export default DS.ActiveModelAdapter;

DS.RESTAdapter.reopen({
	host: ENV.apiHost,
  namespace: "api/v1",
});
