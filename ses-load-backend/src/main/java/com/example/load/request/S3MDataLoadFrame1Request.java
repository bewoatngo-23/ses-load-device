package com.example.load.request;

import com.example.load.entity.PKS3DataLoadFrame1;
import lombok.*;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode
@ToString
public class S3MDataLoadFrame1Request {

    @NotNull
    private PKS3DataLoadFrame1 id;
    @NotNull
    private Long deviceId;
    @Min(value = 0)
    @Max(value = 45000)
    private Double uab;
    @Min(value = 0)
    @Max(value = 45000)
    private Double ubc;
    @Min(value = 0)
    @Max(value = 45000)
    private Double uca;
    @Min(value = 0)
    @Max(value = 45000)
    private Double ull;
    @Min(value = 0)
    @Max(value = 45000)
    private Double uan;
    @Min(value = 0)
    @Max(value = 45000)
    private Double ubn;
    @Min(value = 0)
    @Max(value = 45000)
    private Double ucn;
    @Min(value = 0)
    @Max(value = 45000)
    private Double uln;
    @Min(value = 0)
    @Max(value = 10000)
    private Double ia;
    @Min(value = 0)
    @Max(value = 10000)
    private Double ib;
    @Min(value = 0)
    @Max(value = 10000)
    private Double ic;
    @Min(value = 0)
    @Max(value = 10000)
    private Double in;
    @Min(value = 0)
    @Max(value = 10000)
    private Double ig;
    @Min(value = 0)
    @Max(value = 10000)
    private Double iavg;
    @Min(value = -2000000)
    @Max(value = 2000000)
    private Double pa;
    @Min(value = -2000000)
    @Max(value = 2000000)
    private Double pb;
    @Min(value = -2000000)
    @Max(value = 2000000)
    private Double pc;
    @Min(value = -6000000)
    @Max(value = 6000000)
    private Double pTotal;
    @Min(value = -2000000)
    @Max(value = 2000000)
    private Double qa;
    @Min(value = -2000000)
    @Max(value = 2000000)
    private Double qb;
    @Min(value = -2000000)
    @Max(value = 2000000)
    private Double qc;
    @Min(value = -6000000)
    @Max(value = 6000000)
    private Double qTotal;
    @Min(value = 0)
    @Max(value = 2000000)
    private Double sa;
    @Min(value = 0)
    @Max(value = 2000000)
    private Double sb;
    @Min(value = 0)
    @Max(value = 2000000)
    private Double sc;
    @Min(value = 0)
    @Max(value = 6000000)
    private Double sTotal;
    @Min(-1)
    @Max(1)
    private Double pfa;
    @Min(-1)
    @Max(1)
    private Double pfb;
    @Min(-1)
    @Max(1)
    private Double pfc;
    @Min(-1)
    @Max(1)
    private Double pfavg;
    @Min(value = 45)
    @Max(value = 65)
    private Double f;
    
    private Integer ep;
    
    private Integer epR;
    
    private Integer epDr;
    
    private Integer epDrr;
    
    private Integer eq;
    
    private Integer eqR;
    
    private Integer eqDr;
    
    private Integer eqDrr;
    
    private Integer es;
    
    private Integer esR;
    
    private Integer esDr;
    
    private Integer esDrr;
    @Min(value = -100)
    @Max(value = 100)
    private Double t1;
    @Min(value = -100)
    @Max(value = 100)
    private Double t2;
    @Min(value = -100)
    @Max(value = 100)
    private Double t3;
    @Min(value = -1000)
    @Max(1000)
    private Integer commandData1;
    @Min(value = -1000)
    @Max(1000)
    private Integer commandData2;
    @Min(value = -1000)
    @Max(1000)
    private Integer commandData3;
    @Min(value = -1000)
    @Max(1000)
    private Integer commandData4;
    @Min(value = -1000)
    @Max(1000)
    private Integer commandData5;
    @Min(value = -1000)
    @Max(1000)
    private Integer commandData6;
    @Min(0)
    @Max(100)
    private Double thdIa;
    @Min(0)
    @Max(100)
    private Double thdIb;
    @Min(0)
    @Max(100)
    private Double thdIc;
    @Min(0)
    @Max(100)
    private Double thdIn;
    @Min(0)
    @Max(100)
    private Double thdIg;
    @Min(0)
    @Max(100)
    private Double thdVab;
    @Min(0)
    @Max(100)
    private Double thdVbc;
    @Min(0)
    @Max(100)
    private Double thdVca;
    @Min(0)
    @Max(100)
    private Double thdVll;
    @Min(0)
    @Max(100)
    private Double thdVan;
    @Min(0)
    @Max(100)
    private Double thdVbn;
    @Min(0)
    @Max(100)
    private Double thdVcn;
    @Min(0)
    @Max(100)
    private Double thdVln;

    @NotNull
    private Timestamp sentDate;

	public PKS3DataLoadFrame1 getId() {
		return id;
	}

	public void setId(PKS3DataLoadFrame1 id) {
		this.id = id;
	}

	public Long getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(Long deviceId) {
		this.deviceId = deviceId;
	}

	public Double getUab() {
		return uab;
	}

	public void setUab(Double uab) {
		this.uab = uab;
	}

	public Double getUbc() {
		return ubc;
	}

	public void setUbc(Double ubc) {
		this.ubc = ubc;
	}

	public Double getUca() {
		return uca;
	}

	public void setUca(Double uca) {
		this.uca = uca;
	}

	public Double getUll() {
		return ull;
	}

	public void setUll(Double ull) {
		this.ull = ull;
	}

	public Double getUan() {
		return uan;
	}

	public void setUan(Double uan) {
		this.uan = uan;
	}

	public Double getUbn() {
		return ubn;
	}

	public void setUbn(Double ubn) {
		this.ubn = ubn;
	}

	public Double getUcn() {
		return ucn;
	}

	public void setUcn(Double ucn) {
		this.ucn = ucn;
	}

	public Double getUln() {
		return uln;
	}

	public void setUln(Double uln) {
		this.uln = uln;
	}

	public Double getIa() {
		return ia;
	}

	public void setIa(Double ia) {
		this.ia = ia;
	}

	public Double getIb() {
		return ib;
	}

	public void setIb(Double ib) {
		this.ib = ib;
	}

	public Double getIc() {
		return ic;
	}

	public void setIc(Double ic) {
		this.ic = ic;
	}

	public Double getIn() {
		return in;
	}

	public void setIn(Double in) {
		this.in = in;
	}

	public Double getIg() {
		return ig;
	}

	public void setIg(Double ig) {
		this.ig = ig;
	}

	public Double getIavg() {
		return iavg;
	}

	public void setIavg(Double iavg) {
		this.iavg = iavg;
	}

	public Double getPa() {
		return pa;
	}

	public void setPa(Double pa) {
		this.pa = pa;
	}

	public Double getPb() {
		return pb;
	}

	public void setPb(Double pb) {
		this.pb = pb;
	}

	public Double getPc() {
		return pc;
	}

	public void setPc(Double pc) {
		this.pc = pc;
	}

	public Double getpTotal() {
		return pTotal;
	}

	public void setpTotal(Double pTotal) {
		this.pTotal = pTotal;
	}

	public Double getQa() {
		return qa;
	}

	public void setQa(Double qa) {
		this.qa = qa;
	}

	public Double getQb() {
		return qb;
	}

	public void setQb(Double qb) {
		this.qb = qb;
	}

	public Double getQc() {
		return qc;
	}

	public void setQc(Double qc) {
		this.qc = qc;
	}

	public Double getqTotal() {
		return qTotal;
	}

	public void setqTotal(Double qTotal) {
		this.qTotal = qTotal;
	}

	public Double getSa() {
		return sa;
	}

	public void setSa(Double sa) {
		this.sa = sa;
	}

	public Double getSb() {
		return sb;
	}

	public void setSb(Double sb) {
		this.sb = sb;
	}

	public Double getSc() {
		return sc;
	}

	public void setSc(Double sc) {
		this.sc = sc;
	}

	public Double getsTotal() {
		return sTotal;
	}

	public void setsTotal(Double sTotal) {
		this.sTotal = sTotal;
	}

	public Double getPfa() {
		return pfa;
	}

	public void setPfa(Double pfa) {
		this.pfa = pfa;
	}

	public Double getPfb() {
		return pfb;
	}

	public void setPfb(Double pfb) {
		this.pfb = pfb;
	}

	public Double getPfc() {
		return pfc;
	}

	public void setPfc(Double pfc) {
		this.pfc = pfc;
	}

	public Double getPfavg() {
		return pfavg;
	}

	public void setPfavg(Double pfavg) {
		this.pfavg = pfavg;
	}

	public Double getF() {
		return f;
	}

	public void setF(Double f) {
		this.f = f;
	}

	public Integer getEp() {
		return ep;
	}

	public void setEp(Integer ep) {
		this.ep = ep;
	}

	public Integer getEpR() {
		return epR;
	}

	public void setEpR(Integer epR) {
		this.epR = epR;
	}

	public Integer getEpDr() {
		return epDr;
	}

	public void setEpDr(Integer epDr) {
		this.epDr = epDr;
	}

	public Integer getEpDrr() {
		return epDrr;
	}

	public void setEpDrr(Integer epDrr) {
		this.epDrr = epDrr;
	}

	public Integer getEq() {
		return eq;
	}

	public void setEq(Integer eq) {
		this.eq = eq;
	}

	public Integer getEqR() {
		return eqR;
	}

	public void setEqR(Integer eqR) {
		this.eqR = eqR;
	}

	public Integer getEqDr() {
		return eqDr;
	}

	public void setEqDr(Integer eqDr) {
		this.eqDr = eqDr;
	}

	public Integer getEqDrr() {
		return eqDrr;
	}

	public void setEqDrr(Integer eqDrr) {
		this.eqDrr = eqDrr;
	}

	public Integer getEs() {
		return es;
	}

	public void setEs(Integer es) {
		this.es = es;
	}

	public Integer getEsR() {
		return esR;
	}

	public void setEsR(Integer esR) {
		this.esR = esR;
	}

	public Integer getEsDr() {
		return esDr;
	}

	public void setEsDr(Integer esDr) {
		this.esDr = esDr;
	}

	public Integer getEsDrr() {
		return esDrr;
	}

	public void setEsDrr(Integer esDrr) {
		this.esDrr = esDrr;
	}

	public Double getT1() {
		return t1;
	}

	public void setT1(Double t1) {
		this.t1 = t1;
	}

	public Double getT2() {
		return t2;
	}

	public void setT2(Double t2) {
		this.t2 = t2;
	}

	public Double getT3() {
		return t3;
	}

	public void setT3(Double t3) {
		this.t3 = t3;
	}

	public Integer getCommandData1() {
		return commandData1;
	}

	public void setCommandData1(Integer commandData1) {
		this.commandData1 = commandData1;
	}

	public Integer getCommandData2() {
		return commandData2;
	}

	public void setCommandData2(Integer commandData2) {
		this.commandData2 = commandData2;
	}

	public Integer getCommandData3() {
		return commandData3;
	}

	public void setCommandData3(Integer commandData3) {
		this.commandData3 = commandData3;
	}

	public Integer getCommandData4() {
		return commandData4;
	}

	public void setCommandData4(Integer commandData4) {
		this.commandData4 = commandData4;
	}

	public Integer getCommandData5() {
		return commandData5;
	}

	public void setCommandData5(Integer commandData5) {
		this.commandData5 = commandData5;
	}

	public Integer getCommandData6() {
		return commandData6;
	}

	public void setCommandData6(Integer commandData6) {
		this.commandData6 = commandData6;
	}

	public Double getThdIa() {
		return thdIa;
	}

	public void setThdIa(Double thdIa) {
		this.thdIa = thdIa;
	}

	public Double getThdIb() {
		return thdIb;
	}

	public void setThdIb(Double thdIb) {
		this.thdIb = thdIb;
	}

	public Double getThdIc() {
		return thdIc;
	}

	public void setThdIc(Double thdIc) {
		this.thdIc = thdIc;
	}

	public Double getThdIn() {
		return thdIn;
	}

	public void setThdIn(Double thdIn) {
		this.thdIn = thdIn;
	}

	public Double getThdIg() {
		return thdIg;
	}

	public void setThdIg(Double thdIg) {
		this.thdIg = thdIg;
	}

	public Double getThdVab() {
		return thdVab;
	}

	public void setThdVab(Double thdVab) {
		this.thdVab = thdVab;
	}

	public Double getThdVbc() {
		return thdVbc;
	}

	public void setThdVbc(Double thdVbc) {
		this.thdVbc = thdVbc;
	}

	public Double getThdVca() {
		return thdVca;
	}

	public void setThdVca(Double thdVca) {
		this.thdVca = thdVca;
	}

	public Double getThdVll() {
		return thdVll;
	}

	public void setThdVll(Double thdVll) {
		this.thdVll = thdVll;
	}

	public Double getThdVan() {
		return thdVan;
	}

	public void setThdVan(Double thdVan) {
		this.thdVan = thdVan;
	}

	public Double getThdVbn() {
		return thdVbn;
	}

	public void setThdVbn(Double thdVbn) {
		this.thdVbn = thdVbn;
	}

	public Double getThdVcn() {
		return thdVcn;
	}

	public void setThdVcn(Double thdVcn) {
		this.thdVcn = thdVcn;
	}

	public Double getThdVln() {
		return thdVln;
	}

	public void setThdVln(Double thdVln) {
		this.thdVln = thdVln;
	}

	public Timestamp getSentDate() {
		return sentDate;
	}

	public void setSentDate(Timestamp sentDate) {
		this.sentDate = sentDate;
	}
    
    

}
