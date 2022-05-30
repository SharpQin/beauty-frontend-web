<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="product">
        <h2 class="jh-entity-heading" data-cy="productDetailsHeading">
          <span v-text="$t('beautyApp.product.detail.title')">Product</span> {{ product.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('beautyApp.product.name')">Name</span>
          </dt>
          <dd>
            <span>{{ product.name }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.price')">Price</span>
          </dt>
          <dd>
            <span>{{ product.price }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.type')">Type</span>
          </dt>
          <dd>
            <span v-text="$t('beautyApp.ProductType.' + product.type)">{{ product.type }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.image')">Image</span>
          </dt>
          <dd>
            <span>{{ product.image }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.releaseDate')">Release Date</span>
          </dt>
          <dd>
            <span>{{ product.releaseDate }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.liveTime')">Live Time</span>
          </dt>
          <dd>
            <span v-if="product.liveTime">{{ $d(Date.parse(product.liveTime), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.createdTime')">Created Time</span>
          </dt>
          <dd>
            <span v-if="product.createdTime">{{ $d(Date.parse(product.createdTime), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.updatedTime')">Updated Time</span>
          </dt>
          <dd>
            <span v-if="product.updatedTime">{{ $d(Date.parse(product.updatedTime), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.stock')">Stock</span>
          </dt>
          <dd>
            <span>{{ product.stock }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.showed')">Showed</span>
          </dt>
          <dd>
            <span>{{ product.showed }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.status')">Status</span>
          </dt>
          <dd>
            <span v-text="$t('beautyApp.ProductStatus.' + product.status)">{{ product.status }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.dsc')">Dsc</span>
          </dt>
          <dd>
            <span>{{ product.dsc }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.product.category')">Category</span>
          </dt>
          <dd>
            <div v-if="product.category">
              <router-link :to="{ name: 'ProductCategoryView', params: { productCategoryId: product.category.id } }">{{
                product.category.name
              }}</router-link>
            </div>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="product.id" :to="{ name: 'ProductEdit', params: { productId: product.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./product-details.component.ts"></script>
