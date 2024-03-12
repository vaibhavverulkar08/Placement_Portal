package com.placementportal.helper;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.placementportal.Entity.AddStudent;
import com.placementportal.Entity.Hr;

public class ExcelHelper
{
	public static boolean checkExcelFormat(MultipartFile file) {
		String contentType=file.getContentType();
		if(contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
			System.out.println("verified");
			return true;
		}
		else {
			System.out.println("Not Verified");
			return false;
		}
	}
	
//	To convert excel to list of AddStudent
	public static List<AddStudent> convertExcelToListOfAddStudent(InputStream is){
		List<AddStudent> list=new ArrayList<>();
		try {
		XSSFWorkbook workbook=new XSSFWorkbook(is);
		XSSFSheet sheet=workbook.getSheet("data");
		
		int rowNumber=0;
		Iterator<Row> iter=sheet.iterator();
		
		while(iter.hasNext()) {
			Row row=iter.next();
			if(row.getCell(1).getStringCellValue().equals(""))
				continue;
			if(rowNumber==0) {
				rowNumber++;
				continue;
			}
			Iterator<Cell> cells=row.iterator();
			int cid=0;
			AddStudent p=new AddStudent();
			while(cells.hasNext()) {
				Cell cell=cells.next();
				switch (cid) {
				case 0: 
					p.setStudPrn((int)cell.getNumericCellValue());
					break;
				case 1:
					p.setStudName(cell.getStringCellValue());
					break;
				case 2:
					p.setStudDept(cell.getStringCellValue());
					break;
				case 3:
					p.setStudEmail(cell.getStringCellValue());
					break;
				default:
					break;
				}
				cid++;
				}
			
			list.add(p);
		}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public static List<Hr> convertExcelToListOfProduct(InputStream inputStream) {
		// TODO Auto-generated method stub
		return null;
	}
}