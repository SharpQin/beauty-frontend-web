<template>
  <div>
    <b-dropdown-item to="/role">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.role')">Role</span>
    </b-dropdown-item>
    <b-dropdown-item to="/permission">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.permission')">Permission</span>
    </b-dropdown-item>
    <b-dropdown-item to="/customer">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.customer')">Customer</span>
    </b-dropdown-item>
    <b-dropdown-item to="/address">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.address')">Address</span>
    </b-dropdown-item>
    <b-dropdown-item to="/cus-account">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.cusAccount')">Cus Account</span>
    </b-dropdown-item>
    <b-dropdown-item to="/menu">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.menu')">Menu</span>
    </b-dropdown-item>
    <b-dropdown-item to="/product">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.product')">Product</span>
    </b-dropdown-item>
    <b-dropdown-item to="/product-category">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.productCategory')">Product Category</span>
    </b-dropdown-item>
    <b-dropdown-item to="/product-item">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.productItem')">Product Item</span>
    </b-dropdown-item>
    <b-dropdown-item to="/order">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.order')">Order</span>
    </b-dropdown-item>
    <b-dropdown-item to="/order-item">
      <font-awesome-icon icon="asterisk" />
      <span v-text="$t('global.menu.entities.orderItem')">Order Item</span>
    </b-dropdown-item>
    <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->
  </div>
</template>

<script lang="ts" src="./entities-menu.component.ts"></script>
