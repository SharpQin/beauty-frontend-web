import { Component, Provide, Vue } from 'vue-property-decorator';

import UserService from '@/entities/user/user.service';
import RoleService from './role/role.service';
import PermissionService from './permission/permission.service';
import CustomerService from './customer/customer.service';
import AddressService from './address/address.service';
import CusAccountService from './cus-account/cus-account.service';
import MenuService from './menu/menu.service';
import ProductService from './product/product.service';
import ProductCategoryService from './product-category/product-category.service';
import ProductItemService from './product-item/product-item.service';
import OrderService from './order/order.service';
import OrderItemService from './order-item/order-item.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

@Component
export default class Entities extends Vue {
  @Provide('userService') private userService = () => new UserService();
  @Provide('roleService') private roleService = () => new RoleService();
  @Provide('permissionService') private permissionService = () => new PermissionService();
  @Provide('customerService') private customerService = () => new CustomerService();
  @Provide('addressService') private addressService = () => new AddressService();
  @Provide('cusAccountService') private cusAccountService = () => new CusAccountService();
  @Provide('menuService') private menuService = () => new MenuService();
  @Provide('productService') private productService = () => new ProductService();
  @Provide('productCategoryService') private productCategoryService = () => new ProductCategoryService();
  @Provide('productItemService') private productItemService = () => new ProductItemService();
  @Provide('orderService') private orderService = () => new OrderService();
  @Provide('orderItemService') private orderItemService = () => new OrderItemService();
  // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
}
