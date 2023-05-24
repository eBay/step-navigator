import component from '../index.marko';
import testComponent from './test_template.marko';
import testComponent2 from './test_template-2.marko';

export default {
    title: 'Step Navigator',
    component
};

export const Default = () => ({
    input: require('./fixtures/default')
});

export const RenderBody = () => ({
    input: {
        renderBody: [testComponent, testComponent2]
    }
});
