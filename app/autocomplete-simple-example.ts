import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrls: ['autocomplete-simple-example.css'],
})
export class AutocompleteSimpleExample {
  myControl = new FormControl();
  get AllCountries(): Array<any> {
        return [
            { Name: "SOUTH AFRICA", CountryCode: "ZA", DialingCode: "+27", CurrencyCode: "ZAR", CurrencyDescription: "SOUTH AFRICAN RAND" },
            { Name: "AFGHANISTAN", CountryCode: "AF", DialingCode: "+93", CurrencyCode: "AFN", CurrencyDescription: "AFGHAN AFGHANI" },
            { Name: "ALAND ISLANDS", CountryCode: "AX", DialingCode: "+358", CurrencyCode: "EUR", CurrencyDescription: "EUROPEAN EURO" },
            { Name: "ALBANIA", CountryCode: "AL", DialingCode: "+355", CurrencyCode: "ALL", CurrencyDescription: "ALBANIAN LEK" },
            { Name: "ALGERIA", CountryCode: "DZ", DialingCode: "+213", CurrencyCode: "DZD", CurrencyDescription: "ALGERIAN DINAR" },
            { Name: "AMERICAN SAMOA", CountryCode: "AS", DialingCode: "+685", CurrencyCode: "USD", CurrencyDescription: "UNITED STATES DOLLAR" },
            { Name: "ANDORRA", CountryCode: "AD", DialingCode: "+376", CurrencyCode: "EUR", CurrencyDescription: "EUROPEAN EURO" },
            { Name: "ANGOLA", CountryCode: "AO", DialingCode: "+244", CurrencyCode: "AOA", CurrencyDescription: "ANGOLAN KWANZA" },
            { Name: "ANGUILLA", CountryCode: "AI", DialingCode: "+1", CurrencyCode: "XCD", CurrencyDescription: "EAST CARIBBEAN DOLLAR" },
            { Name: "ANTARCTICA", CountryCode: "AQ", DialingCode: "+672", CurrencyCode: "USD", CurrencyDescription: "UNITED STATES DOLLAR" },
            { Name: "ANTIGUA AND BARBUDA", CountryCode: "AG", DialingCode: "+1", CurrencyCode: "XCD", CurrencyDescription: "EAST CARIBBEAN DOLLAR" },
            { Name: "ARGENTINA", CountryCode: "AR", DialingCode: "+54", CurrencyCode: "ARS", CurrencyDescription: "ARGENTINE PESO" },
            { Name: "ARMENIA", CountryCode: "AM", DialingCode: "+374", CurrencyCode: "AMD", CurrencyDescription: "ARMENIAN DRAM" },
            { Name: "ARUBA", CountryCode: "AW", DialingCode: "+297", CurrencyCode: "AWG", CurrencyDescription: "ARUBAN FLORIN" },
            { Name: "AUSTRALIA", CountryCode: "AU", DialingCode: "+61", CurrencyCode: "AUD", CurrencyDescription: "AUSTRALIAN DOLLAR" },
            { Name: "AUSTRIA", CountryCode: "AT", DialingCode: "+43", CurrencyCode: "EUR", CurrencyDescription: "EUROPEAN EURO" },
            { Name: "AZERBAIJAN", CountryCode: "AZ", DialingCode: "+994", CurrencyCode: "AZN", CurrencyDescription: "AZERBAIJAN MANAT" },
            { Name: "BAHAMAS", CountryCode: "BS", DialingCode: "+1", CurrencyCode: "BSD", CurrencyDescription: "BAHAMIAN DOLLAR" },
            { Name: "BAHRAIN", CountryCode: "BH", DialingCode: "+973", CurrencyCode: "BHD", CurrencyDescription: "BAHRAINI DINAR" },
            { Name: "BANGLADESH", CountryCode: "BD", DialingCode: "+880", CurrencyCode: "BDT", CurrencyDescription: "BANGLADESHI TAKA" },
            { Name: "BARBADOS", CountryCode: "BB", DialingCode: "+1", CurrencyCode: "BBD", CurrencyDescription: "BARBADIAN DOLLAR" },
            { Name: "BELARUS", CountryCode: "BY", DialingCode: "+375", CurrencyCode: "BYN", CurrencyDescription: "BELARUSIAN RUBLE" },
            { Name: "BELGIUM", CountryCode: "BE", DialingCode: "+32", CurrencyCode: "EUR", CurrencyDescription: "EUROPEAN EURO" },
            { Name: "BELIZE", CountryCode: "BZ", DialingCode: "+501", CurrencyCode: "BZD", CurrencyDescription: "BELIZE DOLLAR" },
            { Name: "BENIN", CountryCode: "BJ", DialingCode: "+229", CurrencyCode: "XOF", CurrencyDescription: "WEST AFRICAN CFA FRANC" },
            { Name: "BERMUDA", CountryCode: "BM", DialingCode: "+1", CurrencyCode: "BMD", CurrencyDescription: "BERMUDIAN DOLLAR" },
            { Name: "BHUTAN", CountryCode: "BT", DialingCode: "+975", CurrencyCode: "BTN", CurrencyDescription: "BHUTANESE NGULTRUM" },
            { Name: "BOLIVIA", CountryCode: "BO", DialingCode: "+591", CurrencyCode: "BOB", CurrencyDescription: "BOLIVIAN BOLIVIANO" },
            { Name: "BOSNIA AND HERZEGOVINA", CountryCode: "BA", DialingCode: "+387", CurrencyCode: "BAM", CurrencyDescription: "BOSNIA AND HERZEGOVINA CONVERTIBLE MARK" },
            { Name: "BOTSWANA", CountryCode: "BW", DialingCode: "+267", CurrencyCode: "BWP", CurrencyDescription: "BOTSWANA PULA" },
            { Name: "BOUVET ISLAND", CountryCode: "BV", DialingCode: "+47", CurrencyCode: "NOK", CurrencyDescription: "NORWEGIAN KRONE" },
            { Name: "BRAZIL", CountryCode: "BR", DialingCode: "+55", CurrencyCode: "BRL", CurrencyDescription: "BRAZILIAN REAL" }
        ];
  }
  options: string[] = ['One', 'Two', 'Three'];
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */