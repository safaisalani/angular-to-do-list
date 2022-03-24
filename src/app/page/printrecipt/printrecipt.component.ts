import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printrecipt',
  templateUrl: './printrecipt.component.html',
  styleUrls: ['./printrecipt.component.scss']
})
export class PrintreciptComponent implements OnInit {
  printData: any = {}
  headerText= "Welcome"
  footerText= ""
  viewLogo=false
  ViewImagePreview = false
  previewImage = ""
  branchName = true



  constructor() {
    this.printData =
    {
      printlanguge: "Englisg",
      printLogo: "",
      useBranchLogo: "",
      branchName: "chennai",
      branchaddres: "No.9/2, 4th cross street Chennai , Tamil Nadu India, 632504",
      branchContactDetails: "9876543210-kamalakannan.allmark@gmail,com",
      taxNumber: "GSNTN239048",
      taxSummary: [{
        s1: "SGST/UTGST",
        s2: "2.50",
        s3: "1166.68",
        s4: "29.16"
      }
        ,
      {
        s1: "IGST",
        s2: "0.00",
        s3: "1166.68",
        s4: "0.00"
      },
      {
        s1: "CGST",
        s2: "2.50",
        s3: "1166.68",
        s4: "29.16"
      }],
      taxForEachCol: "",
      salesOrderType: "Dine In",
      customerDetails: "",
      billDateAndTime: "23-03-2022 16:34:47",
      tillName: "T22 / jay - Till",
      tableName: "Ground - GT-3",
      captainName: "",
      cashierName: "Allpos",
      shortBillNumber: "",
      totalItemAndQuantity: "",
      productAddons: "",
      branchFSS: "TG : 0002",
      productNameInseparateLine: "",
      hsnandsavCode: "HSDD",
      skuCode: "SSDSDW",
      discountForEachProduct: "",
      totalSavings: "11.20",
      paymentsummary: "Thank You",
      salesTermsAndConditions: "No retrun",
      customerOutStandingAmount: "601.00",
      customerRoyaltPoint: "some",
      barCode: "code",
      ReceiptPrintedTime: "12:00",
      customer: {
        cusName: "jeeva",
        cusAddress: "jayankondam, tamilnadu india, 621802",
        cusTax: "TAX NO : GST-001",
        cusCon: "9092436341 - jeevajkm@gmail.com"

      }
      , invoiceNo: "INVNO-676878-003",
      description: {
        description: [
          "HSN : HSN09282 Mixed Fruit Salad",
          "SKU : 89 HSN : HSN928347 Gobi 65",
          "HSN : HSN98237420Chicken 65",
          "Sweet Corn Chicken Soup",
          "HSN : HSN2309482309Hot Coriander Soup"
        ],
        tax: [
          "5.00",
          "5.00",
          "5.00",
          "5.00",
          "5.00"
        ],
        price: [
          "80.00",
          "100.00",
          "160.00",
          "100.00",
          "70.00",
        ],
        qty: [
          "2",
          "2",
          "2",
          "3",
          "2",
        ],
        total: [
          "160.00",
          "200.00",
          "320.00",
          "300.00",
          "140.00",
        ]
      },
      section:{
        subtotal:"1120.00"
        ,discount:"(-) 11.20"
        ,product:"87.00",
        delivery:"42.00",
        roundOff:"0,20",
        total:"₹ 1,238.00"
      },
      totalItem:"Total Items : 5 & Total Quantity : 11",
      served:"Allpos",
      date:" 23-03-2022 04:36:04 pm"

    }
    

  }




  ngOnInit(): void {
  }

  setHeaderText(setHeaderText){
    this.headerText = setHeaderText
  }
  setFooterText(setFooterText){
    this.footerText = setFooterText
  }

  AllowToSelectLogo(){
    this.viewLogo = ! this.viewLogo
    this.ViewImagePreview = false
  }

  previewImg(data){
    this.ViewImagePreview =! this.ViewImagePreview
    this.previewImage = data
  }


}
