import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';
import GatewayService from './gateway.service';

@Component
export default class AuGatewayComponent extends Vue {
  public gatewayRoutes: any[] = [];
  public updatingRoutes = false;
  @Inject('gatewayService') private gatewayService: () => GatewayService;

  public mounted(): void {
    this.refresh();
  }

  public refresh(): void {
    this.updatingRoutes = true;
    this.gatewayService()
      .findAll()
      .then(res => {
        this.gatewayRoutes = res.data;
        this.updatingRoutes = false;
      });
  }
}
