<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="customer">
        <h2 class="jh-entity-heading" data-cy="customerDetailsHeading">
          <span v-text="$t('beautyApp.customer.detail.title')">Customer</span> {{ customer.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('beautyApp.customer.name')">Name</span>
          </dt>
          <dd>
            <span>{{ customer.name }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.phone')">Phone</span>
          </dt>
          <dd>
            <span>{{ customer.phone }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.email')">Email</span>
          </dt>
          <dd>
            <span>{{ customer.email }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.birthday')">Birthday</span>
          </dt>
          <dd>
            <span>{{ customer.birthday }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.imageUrl')">Image Url</span>
          </dt>
          <dd>
            <span>{{ customer.imageUrl }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.langKey')">Lang Key</span>
          </dt>
          <dd>
            <span>{{ customer.langKey }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.vip')">Vip</span>
          </dt>
          <dd>
            <span>{{ customer.vip }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.level')">Level</span>
          </dt>
          <dd>
            <span>{{ customer.level }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.point')">Point</span>
          </dt>
          <dd>
            <span>{{ customer.point }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.activated')">Activated</span>
          </dt>
          <dd>
            <span>{{ customer.activated }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.createdDate')">Created Date</span>
          </dt>
          <dd>
            <span v-if="customer.createdDate">{{ $d(Date.parse(customer.createdDate), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.customer.lastModifiedDate')">Last Modified Date</span>
          </dt>
          <dd>
            <span v-if="customer.lastModifiedDate">{{ $d(Date.parse(customer.lastModifiedDate), 'long') }}</span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="customer.id" :to="{ name: 'CustomerEdit', params: { customerId: customer.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./customer-details.component.ts"></script>
