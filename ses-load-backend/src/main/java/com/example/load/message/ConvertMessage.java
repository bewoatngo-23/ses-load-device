package com.example.load.message;

import com.example.load.entity.S3MDataLoadFrame1;
import com.example.load.entity.S3MDataLoadFrame22023Entity;

import java.text.SimpleDateFormat;

public class ConvertMessage {
    static SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");

    public static String messageFrame1(S3MDataLoadFrame1 e) {
        return "@01*01*842911192168125*" + sdf.format(e.getSentDate()) +
                "*1*1*(" + e.getUab() + "," + e.getUbc() + "," + e.getUca() + ")*(" +
                e.getUll() + "," + e.getUan() + "," + e.getUbn() + "," + e.getUcn() + "," + e.getUln() + ")*("
                + e.getIa() + "," + e.getIb() +","+ e.getIc() + "," + e.getIn() + "," + e.getIg() + "," + e.getIavg() + ")*(" +
                e.getPa() + "," + e.getPb() + "," + e.getPc() + "," + e.getsTotal() + ")*(" + e.getQa() + "," + e.getQb() + ","
                + e.getQc() + "," + e.getqTotal() + ")*(" + e.getSa() + "," + e.getSb() + ","
                + e.getSc() + "," + e.getsTotal() + ")*(" + e.getPfa() + ","
                + e.getPfb() + "," + e.getPfc() + "," + e.getPfavg() + ")*" + e.getF() + "*(" +
                e.getEp() + "," + e.getEpR() + "," + e.getEpDr() + "," + e.getEpDrr() + ")*(" +
                e.getEq() + "," + e.getEqR() + "," + e.getEqDr() + "," + e.getEqDrr() + ")*(" +
                e.getEs() + "," + e.getEsR() + "," + e.getEsDr() + "," + e.getEsDrr() + ")*(" +
                e.getT1() + "," + e.getT2() + "," + e.getT3() + ")*(" + e.getCommandData1() + "," + e.getCommandData2() + ","
                + e.getCommandData3() + "," + e.getCommandData4() + "," + e.getCommandData5() + "," + e.getCommandData6() +
                ")*(" + e.getThdIa() + "," + e.getThdIb() + "," + e.getThdIc() + "," + e.getThdIn() + "," + e.getThdIg() + ")*(" +
                e.getThdVab() + "," + e.getThdVbc() + "," + e.getThdVca() + "," + e.getThdVll() + "," + e.getThdVan() + "," +
                e.getThdVbn() + "," + e.getThdVcn() + "," + e.getThdVln() + ")*1f25";
    }

    public static String messageFrame2(S3MDataLoadFrame22023Entity e) {
        return "@[01*01*84*29*1*1*192.168.1.2*0005]*" + sdf.format(e.getSentDate()) +
                "*1*1*(" + e.getVanH1() + "," + +e.getVanH2() + "," + e.getVanH3() + "," + e.getVanH4() + "," +
                e.getVanH5() + "," + e.getVanH6() + "," + e.getVanH7() + "," + e.getVanH8() + "," + e.getVanH9() + ","
                + e.getVanH10() + "," + e.getVanH11() + "," + e.getVanH12() + "," + e.getVanH13() + "," + e.getVanH14() + "," + e.getVanH15()
                + "," + e.getVanH16() + "," + e.getVanH17() + "," + e.getVanH18() + "," + e.getVanH19() + "," +
                e.getVanH20() + "," + e.getVanH21() + "," + e.getVanH22() + "," + e.getVanH23() + "," + e.getVanH24() +
                "," + e.getVanH25() + "," + e.getVanH26() + "," + e.getVanH27() + "," + e.getVanH28() + "," +
                e.getVanH29() + "," + e.getVanH30() + "," + e.getVanH31() + ")*(" +
                +e.getVbnH1() +
                "," +
                +e.getVbnH2() +
                "," +
                e.getVbnH3() +
                "," +
                e.getVbnH4() +
                "," +
                e.getVbnH5() +
                "," +
                e.getVbnH6() +
                "," +
                e.getVbnH7() +
                "," +
                e.getVbnH8() +
                "," +
                e.getVbnH9() +
                "," +
                e.getVbnH10() +
                "," +
                e.getVbnH11() + "," +
                e.getVbnH12() +
                "," +
                e.getVbnH13() +
                "," +
                e.getVbnH14() +
                "," +
                e.getVbnH15() +
                "," +
                e.getVbnH16() +
                "," +
                e.getVbnH17() +
                "," +
                e.getVbnH18() +
                "," +
                e.getVbnH19() +
                "," +
                e.getVbnH20() +
                "," +
                e.getVbnH21() +
                "," +
                e.getVbnH22() +
                "," +
                e.getVbnH23() +
                "," +
                e.getVbnH24() +
                "," +
                e.getVbnH25() +
                "," +
                e.getVbnH26() +
                "," +
                e.getVbnH27() +
                "," +
                e.getVbnH28() +
                "," +
                e.getVbnH29() +
                "," +
                e.getVbnH30() +
                "," +
                e.getVbnH31() +
                ")*(" + +e.getVcnH1() +
                "," +
                +e.getVcnH2() +
                "," +
                e.getVcnH3() +
                "," +
                e.getVcnH4() +
                "," +
                e.getVcnH5() +
                "," +
                e.getVcnH6() +
                "," +
                e.getVcnH7() +
                "," +
                e.getVcnH8() +
                "," +
                e.getVcnH9() +
                "," +
                e.getVcnH10() +
                "," +
                e.getVcnH11() + "," +
                e.getVcnH12() +
                "," +
                e.getVcnH13() +
                "," +
                e.getVcnH14() +
                "," +
                e.getVcnH15() +
                "," +
                e.getVcnH16() +
                "," +
                e.getVcnH17() +
                "," +
                e.getVcnH18() +
                "," +
                e.getVcnH19() +
                "," +
                e.getVcnH20() +
                "," +
                e.getVcnH21() +
                "," +
                e.getVcnH22() +
                "," +
                e.getVcnH23() +
                "," +
                e.getVcnH24() +
                "," +
                e.getVcnH25() +
                "," +
                e.getVcnH26() +
                "," +
                e.getVcnH27() +
                "," +
                e.getVcnH28() +
                "," +
                e.getVcnH29() +
                "," +
                e.getVcnH30() +
                "," +
                e.getVcnH31() +
                ")*("
                + e.getIaH1() +
                "," +
                +e.getIaH2() +
                "," +
                e.getIaH3() +
                "," +
                e.getIaH4() +
                "," +
                e.getIaH5() +
                "," +
                e.getIaH6() +
                "," +
                e.getIaH7() +
                "," +
                e.getIaH8() +
                "," +
                e.getIaH9() +
                "," +
                e.getIaH10() +
                "," +
                e.getIaH11() + "," +
                e.getIaH12() +
                "," +
                e.getIaH13() +
                "," +
                e.getIaH14() +
                "," +
                e.getIaH15() +
                "," +
                e.getIaH16() +
                "," +
                e.getIaH17() +
                "," +
                e.getIaH18() +
                "," +
                e.getIaH19() +
                "," +
                e.getIaH20() +
                "," +
                e.getIaH21() +
                "," +
                e.getIaH22() +
                "," +
                e.getIaH23() +
                "," +
                e.getIaH24() +
                "," +
                e.getIaH25() +
                "," +
                e.getIaH26() +
                "," +
                e.getIaH27() +
                "," +
                e.getIaH28() +
                "," +
                e.getIaH29() +
                "," +
                e.getIaH30() +
                "," +
                e.getIaH31() +
                ")*(" + e.getIbH1() +
                "," +
                +e.getIbH2() +
                "," +
                e.getIbH3() +
                "," +
                e.getIbH4() +
                "," +
                e.getIbH5() +
                "," +
                e.getIbH6() +
                "," +
                e.getIbH7() +
                "," +
                e.getIbH8() +
                "," +
                e.getIbH9() +
                "," +
                e.getIbH10() +
                "," + e.getIbH11() + "," +
                e.getIbH12() +
                "," +
                e.getIbH13() +
                "," +
                e.getIbH14() +
                "," +
                e.getIbH15() +
                "," +
                e.getIbH16() +
                "," +
                e.getIbH17() +
                "," +
                e.getIbH18() +
                "," +
                e.getIbH19() +
                "," +
                e.getIbH20() +
                "," +
                e.getIbH21() +
                "," +
                e.getIbH22() +
                "," +
                e.getIbH23() +
                "," +
                e.getIbH24() +
                "," +
                e.getIbH25() +
                "," +
                e.getIbH26() +
                "," +
                e.getIbH27() +
                "," +
                e.getIbH28() +
                "," +
                e.getIbH29() +
                "," +
                e.getIbH30() +
                "," +
                e.getIbH31() +
                ")*("
                + e.getIcH1() +
                "," +
                +e.getIcH2() +
                "," +
                e.getIcH3() +
                "," +
                e.getIcH4() +
                "," +
                e.getIcH5() +
                "," +
                e.getIcH6() +
                "," +
                e.getIcH7() +
                "," +
                e.getIcH8() +
                "," +
                e.getIcH9() +
                "," +
                e.getIcH10() +
                "," + e.getIcH11() + "," +
                e.getIcH12() +
                "," +
                e.getIcH13() +
                "," +
                e.getIcH14() +
                "," +
                e.getIcH15() +
                "," +
                e.getIcH16() +
                "," +
                e.getIcH17() +
                "," +
                e.getIcH18() +
                "," +
                e.getIcH19() +
                "," +
                e.getIcH20() +
                "," +
                e.getIcH21() +
                "," +
                e.getIcH22() +
                "," +
                e.getIcH23() +
                "," +
                e.getIcH24() +
                "," +
                e.getIcH25() +
                "," +
                e.getIcH26() +
                "," +
                e.getIcH27() +
                "," +
                e.getIcH28() +
                "," +
                e.getIcH29() +
                "," +
                e.getIcH30() +
                "," +
                e.getIcH31() +
                ")*2e8b";

    }

}
