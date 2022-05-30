<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="menu">
        <h2 class="jh-entity-heading" data-cy="menuDetailsHeading">
          <span v-text="$t('beautyApp.menu.detail.title')">Menu</span> {{ menu.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('beautyApp.menu.name')">Name</span>
          </dt>
          <dd>
            <span>{{ menu.name }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.menu.title')">Title</span>
          </dt>
          <dd>
            <span>{{ menu.title }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.menu.link')">Link</span>
          </dt>
          <dd>
            <span>{{ menu.link }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.menu.method')">Method</span>
          </dt>
          <dd>
            <span>{{ menu.method }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.menu.authKey')">Auth Key</span>
          </dt>
          <dd>
            <span>{{ menu.authKey }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.menu.showed')">Showed</span>
          </dt>
          <dd>
            <span>{{ menu.showed }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.menu.parent')">Parent</span>
          </dt>
          <dd>
            <span>{{ menu.parent }}</span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="menu.id" :to="{ name: 'MenuEdit', params: { menuId: menu.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./menu-details.component.ts"></script>
