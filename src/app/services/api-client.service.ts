import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SettingsResponse} from "../types/settings.response";
import {TemperatureResponse} from "../types/temperature.response";
import {MenuResponse} from "../types/food/menu.response";
import {ClassroomAnnouncementResponse} from "../types/classroom-announcement.response";
import {VasttrafikStopAreaResponse} from "../types/vasttrafik/vasttrafik-stop-area.response";
import {SchoolBreaksResponse} from "../types/breaks/school-breaks.response";
import {GraduationMoneyResponse} from "../types/graduation-money.response";
import {ThemeType} from "./theme.service";
import {SunPhasesResponse} from "../types/sun-phases.response";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5000';
  }

  getSunPhases() {
    return this.get<SunPhasesResponse>('sunPhases');
  }

  getLogoUrl(theme: ThemeType) {
    return this.baseUrl + '/logo/' + theme.toString();
  }

  getGraduationMoneyGoals() {
    return this.get<GraduationMoneyResponse[]>('graduationMoneyGoals');
  }

  getBreaks() {
    return this.get<SchoolBreaksResponse>('schoolBreaks');
  }

  getVasttrafikDepartures() {
    return this.get<VasttrafikStopAreaResponse[]>("vasttrafik/departures");
  }

  getMenu() {
    return this.get<MenuResponse>('food/menu');
  }

  getLatestClassroomAnnouncement() {
    return this.get<ClassroomAnnouncementResponse>('classroom/latestAnnouncement');
  }

  getLatestTemperature() {
    return this.get<TemperatureResponse>('temperature/latest');
  }

  getSettings() {
    return this.get<SettingsResponse>('settings');
  }

  get<TResponse>(path: string) {
    return this.http.get<TResponse>(this.baseUrl + '/' + path);
  }
}
