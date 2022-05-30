/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';
import { ToastPlugin } from 'bootstrap-vue';

import dayjs from 'dayjs';
import { DATE_TIME_LONG_FORMAT } from '@/shared/date/filters';

import * as config from '@/shared/config/config';
import CustomerUpdateComponent from '@/entities/customer/customer-update.vue';
import CustomerClass from '@/entities/customer/customer-update.component';
import CustomerService from '@/entities/customer/customer.service';

import AddressService from '@/entities/address/address.service';

import CusAccountService from '@/entities/cus-account/cus-account.service';
import AlertService from '@/shared/alert/alert.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.use(ToastPlugin);
localVue.component('font-awesome-icon', {});
localVue.component('b-input-group', {});
localVue.component('b-input-group-prepend', {});
localVue.component('b-form-datepicker', {});
localVue.component('b-form-input', {});

describe('Component Tests', () => {
  describe('Customer Management Update Component', () => {
    let wrapper: Wrapper<CustomerClass>;
    let comp: CustomerClass;
    let customerServiceStub: SinonStubbedInstance<CustomerService>;

    beforeEach(() => {
      customerServiceStub = sinon.createStubInstance<CustomerService>(CustomerService);

      wrapper = shallowMount<CustomerClass>(CustomerUpdateComponent, {
        store,
        i18n,
        localVue,
        router,
        provide: {
          customerService: () => customerServiceStub,
          alertService: () => new AlertService(),

          addressService: () =>
            sinon.createStubInstance<AddressService>(AddressService, {
              retrieve: sinon.stub().resolves({}),
            } as any),

          cusAccountService: () =>
            sinon.createStubInstance<CusAccountService>(CusAccountService, {
              retrieve: sinon.stub().resolves({}),
            } as any),
        },
      });
      comp = wrapper.vm;
    });

    describe('load', () => {
      it('Should convert date from string', () => {
        // GIVEN
        const date = new Date('2019-10-15T11:42:02Z');

        // WHEN
        const convertedDate = comp.convertDateTimeFromServer(date);

        // THEN
        expect(convertedDate).toEqual(dayjs(date).format(DATE_TIME_LONG_FORMAT));
      });

      it('Should not convert date if date is not present', () => {
        expect(comp.convertDateTimeFromServer(null)).toBeNull();
      });
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.customer = entity;
        customerServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(customerServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.customer = entity;
        customerServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(customerServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });

    describe('Before route enter', () => {
      it('Should retrieve data', async () => {
        // GIVEN
        const foundCustomer = { id: 123 };
        customerServiceStub.find.resolves(foundCustomer);
        customerServiceStub.retrieve.resolves([foundCustomer]);

        // WHEN
        comp.beforeRouteEnter({ params: { customerId: 123 } }, null, cb => cb(comp));
        await comp.$nextTick();

        // THEN
        expect(comp.customer).toBe(foundCustomer);
      });
    });

    describe('Previous state', () => {
      it('Should go previous state', async () => {
        comp.previousState();
        await comp.$nextTick();

        expect(comp.$router.currentRoute.fullPath).toContain('/');
      });
    });
  });
});
