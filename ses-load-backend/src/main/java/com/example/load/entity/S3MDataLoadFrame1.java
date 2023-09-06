package com.example.load.entity;

import lombok.*;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "s3m_data_load_frame_1_2023")
@NoArgsConstructor
@Data
@ToString
@EqualsAndHashCode
//@IdClass(PKS3MDataLoadFrameIdClass.class)
public class S3MDataLoadFrame1 implements Serializable {
    private static final long serialVersionUID = -5419345600310440297L;
    @EmbeddedId
    private PKS3DataLoadFrame1 id;

    @Column(name = "device_id")
    private Long deviceId;

    @Column(name = "uab")
    private Double uab;

    @Column(name = "ubc")
    private Double ubc;

    @Column(name = "uca")
    private Double uca;

    
	@Column(name = "ull")
    private Double ull;

    @Column(name = "uan")
    private Double uan;

    @Column(name = "ubn")
    private Double ubn;

    @Column(name = "ucn")
    private Double ucn;

    @Column(name = "uln")
    private Double uln;

    @Column(name = "ia")
    private Double ia;

    @Column(name = "ib")
    private Double ib;

    @Column(name = "ic")
    private Double ic;

    @Column(name = "i_n")
    private Double in;

    @Column(name = "ig")
    private Double ig;

    @Column(name = "iavg")
    private Double iavg;

    @Column(name = "pa")
    private Double pa;

    @Column(name = "pb")
    private Double pb;

    @Column(name = "pc")
    private Double pc;

    @Column(name = "p_total")
    private Double pTotal;

    @Column(name = "qa")
    private Double qa;

    @Column(name = "qb")
    private Double qb;

    @Column(name = "qc")
    private Double qc;

    @Column(name = "q_total")
    private Double qTotal;

    @Column(name = "sa")
    private Double sa;

    @Column(name = "sb")
    private Double sb;

    @Column(name = "sc")
    private Double sc;

    @Column(name = "s_total")
    private Double sTotal;

    @Column(name = "pfa")
    private Double pfa;

    @Column(name = "pfb")
    private Double pfb;

    @Column(name = "pfc")
    private Double pfc;

    @Column(name = "pfavg")
    private Double pfavg;

    @Column(name = "f")
    private Double f;

    @Column(name = "ep")
    private Integer ep;

    @Column(name = "ep_r")
    private Integer epR;

    @Column(name = "ep_dr")
    private Integer epDr;

    @Column(name = "ep_drr")
    private Integer epDrr;

    @Column(name = "eq")
    private Integer eq;

    @Column(name = "eq_r")
    private Integer eqR;

    @Column(name = "eq_dr")
    private Integer eqDr;

    @Column(name = "eq_drr")
    private Integer eqDrr;

    @Column(name = "es")
    private Integer es;

    @Column(name = "es_r")
    private Integer esR;

    @Column(name = "es_dr")
    private Integer esDr;

    @Column(name = "es_drr")
    private Integer esDrr;

    @Column(name = "t1")
    private Double t1;

    @Column(name = "t2")
    private Double t2;

    @Column(name = "t3")
    private Double t3;

    @Column(name = "command_data1")
    private Integer commandData1;

    @Column(name = "command_data2")
    private Integer commandData2;

    @Column(name = "command_data3")
    private Integer commandData3;

    @Column(name = "command_data4")
    private Integer commandData4;

    @Column(name = "command_data5")
    private Integer commandData5;

    @Column(name = "command_data6")
    private Integer commandData6;

    @Column(name = "thd_ia")
    private Double thdIa;

    @Column(name = "thd_ib")
    private Double thdIb;

    @Column(name = "thd_ic")
    private Double thdIc;

    @Column(name = "thd_in")
    private Double thdIn;

    @Column(name = "thd_ig")
    private Double thdIg;

    @Column(name = "thd_vab")
    private Double thdVab;

    @Column(name = "thd_vbc")
    private Double thdVbc;

    @Column(name = "thd_vca")
    private Double thdVca;

    @Column(name = "thd_vll")
    private Double thdVll;

    @Column(name = "thd_van")
    private Double thdVan;

    @Column(name = "thd_vbn")
    private Double thdVbn;

    @Column(name = "thd_vcn")
    private Double thdVcn;

    @Column(name = "thd_vln")
    private Double thdVln;

    @Column(name = "sent_date")
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
    
    


}
