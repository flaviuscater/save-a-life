import {Authority} from './Authority';

export class UserDetails {
  private password?: string;
  private username?: string;
  private authorities?: Authority[];
  private accountNonExpired?: boolean;
  private accountNonLocked?: boolean;
  private credentialsNonExpired?: boolean;
  private enabled?: boolean;

  UserDetails() {
  }
}
