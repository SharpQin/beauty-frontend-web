<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="role">
        <h2 class="jh-entity-heading" data-cy="roleDetailsHeading">
          <span v-text="$t('beautyApp.role.detail.title')">Role</span> {{ role.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('beautyApp.role.name')">Name</span>
          </dt>
          <dd>
            <span>{{ role.name }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.role.dsc')">Dsc</span>
          </dt>
          <dd>
            <span>{{ role.dsc }}</span>
          </dd>
          <dt>
            <span v-text="$t('beautyApp.role.permissions')">Permissions</span>
          </dt>
          <dd>
            <span v-for="(auth, i) in role.auths" :key="auth"
              >{{ i > 0 ? ', ' : '' }}
              {{auth}}
            </span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link v-if="role.id" :to="{ name: 'RoleEdit', params: { roleId: role.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./role-details.component.ts"></script>
